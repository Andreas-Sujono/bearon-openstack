import { numToPx, pxToRem } from '../utils';

export type MediaType =
  | 'desktop'
  | 'laptop'
  | 'tablet'
  | 'mobile'
  | 'mobileSm'
  | 'base';
export const media: Record<MediaType, number> = {
  base: 1240,
  desktop: 1920,
  laptop: 1240,
  tablet: 836,
  mobile: 480,
  mobileSm: 348,
};

// Full list of tokens
const baseTokens = {
  rgbBlack: '0 0 0',
  rgbWhite: '255 255 255',
  bezierFastoutSlowin: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  durationXs: '200ms',
  durationSm: '300ms',
  durationMd: '400ms',
  durationLg: '600ms',
  durationXl: '800ms',
  systemFontStack:
    'system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif',
  fontStack: `sans-serif, var(--systemFontStack)`,
  monoFontStack:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeBodyXl: pxToRem(22),
  fontSizeBodyLg: pxToRem(20),
  fontSizeBodyMd: pxToRem(18),
  fontSizeBodySm: pxToRem(16),
  fontSizeBodyXs: pxToRem(14),
  fontSizeBodyXxs: pxToRem(12),
  lineHeightTitle: '1.1',
  lineHeightBody: '1.5',
  maxWidthXs: numToPx(media.mobileSm),
  maxWidthSm: numToPx(media.mobile),
  maxWidthMd: numToPx(media.laptop),
  maxWidthLg: numToPx(media.laptop + 220),
  maxWidthXl: numToPx(media.laptop + 340),
  maxWidthXxl: numToPx(media.desktop),
  spaceOuter: '64px',
  spaceXs: '4px',
  spaceSm: '8px',
  spaceMd: '16px',
  spaceLg: '24px',
  spaceXl: '32px',
  space2Xl: '48px',
  space3Xl: '64px',
  space4Xl: '96px',
  space5Xl: '128px',
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64,
  boxShadowMd:
    '0 0 #0000,0 0 #0000,0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a',
  boxShadowLg:
    '0 0 #0000,0 0 #0000,0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a',
  boxShadowXl:
    '0 0 #0000,0 0 #0000,0 20px 25px -5px #0000001a,0 8px 10px -6px #0000001a',
};

// Tokens that change based on viewport size
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80),
};

const tokensLaptop = {
  maxWidthXs: '370px',
  maxWidthSm: '480px',
  maxWidthMd: '640px',
  maxWidthLg: '1000px',
  maxWidthXl: '1100px',
  maxWidth3Xl: '1500px',
  spaceOuter: '48px',
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22),
};

const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20),
  lineHeightTitle: '1.1',
  lineHeightBody: '1.4',
};

const tokensMobile = {
  spaceOuter: '24px',
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyLg: pxToRem(17),
  fontSizeBodyMd: pxToRem(16),
  fontSizeBodySm: pxToRem(14),
  fontSizeBodyXs: pxToRem(12),
  fontSizeBodyXxs: pxToRem(11),
  lineHeightTitle: '1.1',
  lineHeightBody: '1.3',
};

const tokensMobileSmall = {
  spaceOuter: '16px',
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20),
  fontSizeBodyLg: pxToRem(16),
  fontSizeBodyMd: pxToRem(15),
  fontSizeBodySm: pxToRem(14),
};

// Tokens that change based on theme
const dark = {
  themeId: 'dark',
  background: 'rgb(17 17 17)',
  backgroundLight: 'rgb(26 26 26)',
  primary: 'rgb(0 229 255)',
  secondary: 'rgb(255 25 0)',
  accent: 'rgb(0 229 255)',
  success: 'rgb(12 132 37)',
  error: 'rgb(255 55 102)',
  warning: 'rgb(249 115 22)',
  info: 'rgb(30 58 138)',
  grey: 'rgb(98 101 99)',
  textTitle: 'rgb(255 255 255)',
  textBody: 'rgb((255 255 255) / 0.8)',
  textLight: 'rgb((255 255 255) / 0.6)',
  white: '#ffffff',
  black: '#000000',
};

type PredefinedThemeColor =
  | 'background'
  | 'backgroundLight'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'grey'
  | 'textTitle'
  | 'textBody'
  | 'textLight'
  | 'white'
  | 'black';
export type ThemeColor = PredefinedThemeColor | (string & Record<never, never>);

const light = {
  themeId: 'light',
  background: 'rgb(242 242 242)',
  backgroundLight: 'rgb(255 255 255)',
  primary: 'rgb(19 97 240)',
  secondary: 'rgb(222 64 64)',
  accent: 'rgb(64 222 222)',
  success: 'rgb(12 132 37)',
  error: 'rgb(255 0 60)',
  warning: 'rgb(249 115 22)',
  info: 'rgb(30 58 138)',
  grey: 'rgb(98 101 99)',
  textTitle: 'rgb(0 0 0)',
  textBody: '#434241',
  textLight: '#807d79',
  white: '#ffffff',
  black: '#000000',
};

export const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileSm: tokensMobileSmall,
};

export const mediaScreen = {
  minLaptop: `@media screen and (min-width: ${media.laptop}px)`,
  minTablet: `@media screen and (min-width: ${media.tablet}px) and (max-width: ${media.laptop}px)`,
  minMobile: `@media screen and (min-width: ${media.mobile}px) and (max-width: ${media.tablet}px)`,
  maxMobileSm: `@media screen and (max-width: ${media.mobile}px)`,
};

export type ThemeToken = typeof baseTokens;
export type ThemeTokens = Record<MediaType, Partial<ThemeToken>>;

export type Theme = Partial<typeof dark>;
export type Themes = Record<string, Partial<Theme>>;

export const themes = { dark, light, activeTheme: light };

export const sdkName = 'ntv';
