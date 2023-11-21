import { createElement } from 'react';

// credit: https://github.com/ndrean/bau-react-css/blob/main/src/bau-reactcss.js
const classNames = (...cn: string[]) => [...cn].join(' ');

const toHash = (str: string) => {
  let i = 0,
    out = 11;
  while (i < str.length) out = (101 * out + str.charCodeAt(i++)) >>> 0;
  return 'bear' + out;
};

const addStyle = (
  target: { append: (arg0: HTMLStyleElement) => void },
  className: string,
  cssText: string | Node
) => {
  const style = document.createElement('style');
  style.id = className;
  style.append(cssText);
  target.append(style);
};

const merge = (
  type: string,
  compiled: string,
  target: { append: (arg0: HTMLStyleElement) => void }
) => {
  const name = toHash(compiled);
  if (!document.getElementById(name)) {
    type
      ? addStyle(target, name, `${type}${name} { ${compiled}}`)
      : addStyle(target, name, compiled);
  }
  return name;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const compileStyles = (rest: any, strings: string[], args: string[]) =>
  strings.reduce((acc, value, i) => {
    if (typeof args[i] !== 'object') {
      return acc + value + (args[i] ?? '');
    } else {
      const otherProps = Object.keys(rest).filter(
        (k) => typeof rest[k] !== 'function' && rest[k]
      );
      const condCss = Object.entries(args[i]).reduce((accn, [k, v]) => {
        return otherProps.includes(k) ? accn + v : accn;
      }, '');
      return acc + value + condCss;
    }
  }, '');

export default function BauReactCss({
  document: Document = window.document,
  target = document.head,
} = {}) {
  const styled =
    (
      tag: string,
      props: {
        [x: string]: string | React.ReactNode;
        className: string;
        children: React.ReactNode;
      }
    ) =>
    (strings: string[], ...args: string[]) => {
      const { className, children, ...rest } = props;
      const compiledStyles = compileStyles(rest, strings, args);
      const name = merge('.', compiledStyles, target);

      return createElement(
        tag,
        {
          className: classNames(name, className),
          ...rest,
        },
        children
      );
    };

  const mergeIt =
    (type?: string) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (strings: any, ...args: string[]) =>
      merge(type || '', compileStyles('', strings, args), target);

  return {
    styled,
    css: mergeIt('.'),
    keyframes: mergeIt('@keyframes '),
    createGlobalStyles: mergeIt(),
  };
}

const { css, styled, keyframes, createGlobalStyles } = BauReactCss();
export const bearCss = css;
export const bearStyled = styled;
export const bearKeyframes = keyframes;
export const bearCreateGlobalStyles = createGlobalStyles;
