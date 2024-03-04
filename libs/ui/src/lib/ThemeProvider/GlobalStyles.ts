import { createGlobalStyle } from 'styled-components';
import { MediaType, Theme, ThemeTokens } from './theme';

/**
 * Squeeze out spaces and newlines
 */
export function squish(styles: string) {
  return styles.replace(/\s\s+/g, ' ');
}

/**
 * Transform theme token objects into CSS custom property strings
 */
export function createThemeProperties(theme: Record<string, string | number>) {
  theme = theme || {};
  return squish(
    Object.keys(theme)
      .filter((key) => key !== 'themeId')
      .map((key) => `--${key}: ${theme[key]};`)
      .join('\n\n')
  );
}

/**
 * Transform theme tokens into a React CSSProperties object
 */
export function createThemeStyleObject(theme: Record<string, string | number>) {
  const style = {} as Record<string, string>;

  for (const key of Object.keys(theme)) {
    if (key !== 'themeId') {
      style[`--${key}`] = theme[key] as string;
    }
  }

  return style;
}

/**
 * Generate media queries for tokens
 */
export function createMediaTokenProperties(
  media: Record<MediaType, number>,
  tokens: ThemeTokens
) {
  return squish(
    `
    @media (max-width: ${media.desktop}px) {
      :root {
        ${createThemeProperties(tokens.desktop || tokens.base)}
      }
    }
    @media (max-width: ${media.laptop}px) {
      :root {
        ${createThemeProperties(tokens.laptop || tokens.base)}
      }
    }
    @media (max-width: ${media.tablet}px) {
      :root {
        ${createThemeProperties(tokens.tablet || tokens.base)}
      }
    }
    @media (max-width: ${media.mobile}px) {
      :root {
        ${createThemeProperties(tokens.mobile || tokens.base)}
      }
    }
    @media (max-width: ${media.mobileSm}px) {
      :root {
        ${createThemeProperties(
          tokens.mobileSm || tokens.mobile || tokens.tablet || tokens.base
        )}
      }
    }
    `
  );
}

export const GlobalStyle = createGlobalStyle<{
  media: Record<string, number>;
  tokens: ThemeTokens;
  theme: Theme;
}>`
   :root {
      font-family: ${(props) => props.tokens.base.fontStack};
      ${(props) => createThemeProperties(props.tokens.base)};
      ${(props) => createThemeProperties(props.theme as Partial<Theme>)};
    }  
    ${(props) => createMediaTokenProperties(props.media, props.tokens)};
`;
