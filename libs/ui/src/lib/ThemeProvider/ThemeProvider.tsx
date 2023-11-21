import React, { createContext, useEffect, useRef } from 'react';
import { classes } from '@bearon/utils';
import { Themes, Theme, themes, ThemeTokens, tokens, media } from './theme';
import { createTokenStyles } from './GlobalStyles';

type ThemeContextState = Theme;

export const ThemeContext = createContext<
  ThemeContextState | Record<string, string>
>({});

interface ThemeProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  themeId?: 'dark' | 'light';
  themes?: Themes;
  tokens?: ThemeTokens;
  media?: Record<string, number>; //desktop, laptop, tablet, mobile, mobileS
  children?: React.ReactElement;
  className?: string;
  as?: React.ElementType;
}
export const ThemeProvider = ({
  themeId = 'light',
  themes: themesOverrides,
  tokens: tokensOverrides,
  media: mediaOverrides,
  children,
  className,
  as: Component = 'div',
  ...rest
}: ThemeProviderProps) => {
  const currentTheme = {
    ...(themes[themeId] || {}),
    ...(themesOverrides?.[themeId] || {}),
  };
  const sheetRef = useRef<CSSStyleSheet | null>(null);

  useEffect(() => {
    const finalThemes = {
      ...(themesOverrides || {}),
      dark: {
        ...themes.dark,
        ...(themesOverrides?.['dark'] || {}),
      },
      light: {
        ...themes.light,
        ...(themesOverrides?.['light'] || {}),
      },
    };
    const finalTokens: ThemeTokens = {
      base: {
        ...tokens.base,
        ...tokensOverrides?.['base'],
      },
      desktop: {
        ...tokens.desktop,
        ...tokensOverrides?.['desktop'],
      },
      laptop: {
        ...tokens.laptop,
        ...tokensOverrides?.['laptop'],
      },
      tablet: {
        ...tokens.tablet,
        ...tokensOverrides?.['tablet'],
      },
      mobile: {
        ...tokens.mobile,
        ...tokensOverrides?.['mobile'],
      },
      mobileS: {
        ...tokens.mobileS,
        ...tokensOverrides?.['mobileS'],
      },
    };
    const finalMedia = { ...media, ...(mediaOverrides || {}) };

    if (!sheetRef.current) {
      const styleNode = document.createElement('style');
      styleNode.append(createTokenStyles(finalMedia, finalTokens, finalThemes));
      const sheet = document.head.appendChild(styleNode).sheet;
      sheetRef.current = sheet;
    } else {
      //pass
    }

    // assume theme props cannot be dynamic in run time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={currentTheme}>
      <Component
        className={classes('theme-provider', className)}
        data-theme={themeId}
        {...rest}
      >
        {children}
      </Component>
    </ThemeContext.Provider>
  );
};
