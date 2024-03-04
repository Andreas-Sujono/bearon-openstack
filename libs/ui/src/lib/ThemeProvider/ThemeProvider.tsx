import React, { createContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme, themes, ThemeTokens, tokens, media, MediaType } from './theme';
import { GlobalStyle } from './GlobalStyles';
import { classes } from '../utils';

type ThemeContextState = Theme;

export const ThemeContext = createContext<
  ThemeContextState | Record<string, string>
>({});

interface ThemeProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  themeId?: 'dark' | 'light';
  theme?: Partial<Theme>;
  tokens?: ThemeTokens;
  media?: Record<MediaType, number>;
  children?:
    | React.ReactElement
    | React.ReactNode
    | React.ReactElement[]
    | React.ReactNode[];
  className?: string;
  as?: React.ElementType;
}
export const ThemeProvider = ({
  themeId = 'light',
  theme: themeOverrides,
  tokens: tokensOverrides,
  media: mediaOverrides,
  children,
  className,
  as: Component = 'div',
  ...rest
}: ThemeProviderProps) => {
  const currentTheme = {
    ...(themes[themeId] || {}),
    ...(themeOverrides || {}),
  };
  if (themes[themeId]) {
    themes[themeId] = currentTheme; //change global variable
  }
  if (themes.activeTheme) {
    themes.activeTheme = currentTheme; //change global variable
  }

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
    mobileSm: {
      ...tokens.mobileSm,
      ...tokensOverrides?.['mobileSm'],
    },
  };
  const finalMedia = { ...media, ...(mediaOverrides || {}) };

  return (
    <ThemeContext.Provider value={currentTheme}>
      <StyledThemeProvider theme={currentTheme}>
        <Component
          className={classes('theme-provider', className)}
          data-theme={themeId}
          {...rest}
        >
          <GlobalStyle
            theme={currentTheme}
            media={finalMedia}
            tokens={finalTokens}
          />
          {children}
        </Component>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
