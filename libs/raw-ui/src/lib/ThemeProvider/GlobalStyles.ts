import { Themes, ThemeTokens } from './theme';

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
  media: Record<string, number>,
  tokens: ThemeTokens
) {
  return squish(
    Object.keys(media)
      .map((key) => {
        return `
          @media (max-width: ${media[key as 'desktop']}px) {
            :root {
              ${createThemeProperties(tokens[key as 'desktop'] || tokens.base)}
            }
          }
        `;
      })
      .join('\n')
  );
}

export const createTokenStyles = (
  media: Record<string, number>,
  tokens: ThemeTokens,
  themes: Themes
) =>
  squish(`
    :root {
      font-family: ${tokens.base.fontStack};
      ${createThemeProperties(tokens.base)}
      ${createThemeProperties(themes.light)}
      ${createMediaTokenProperties(media, tokens)}
    }  

    [data-theme='dark'] {
      ${createThemeProperties(themes.dark)}
    }
  
    [data-theme='light'] {
      ${createThemeProperties(themes.light)}
    }
  `);
