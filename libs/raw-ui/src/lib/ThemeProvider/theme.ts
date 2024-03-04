import { pxToRem } from '@bearon/utils';

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
  lineHeightTitle: '1.1',
  lineHeightBody: '1.6',
  maxWidthSm: '540px',
  maxWidthMd: '720px',
  maxWidthLg: '1096px',
  maxWidthXl: '1680px',
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
};

// Tokens that change based on viewport size
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80),
};

const tokensLaptop = {
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
};

const tokensMobile = {
  spaceOuter: '24px',
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14),
};

const tokensMobileSmall = {
  spaceOuter: '16px',
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20),
};

// Tokens that change based on theme
const dark = {
  themeId: 'dark',
  rgbBackground: '17 17 17', //main page background
  rgbBackgroundLight: '26 26 26', //secondary background for boxes
  rgbPrimary: '0 229 255', //cta1
  rgbSecondary: '255 25 0', //cta2
  rgbAccent: '0 229 255', //main cta
  rgbText: '255 255 255',
  rgbSuccess: '12 132 37',
  rgbError: '255 55 102',
  rgbWarning: '249 115 22',
  rgbInfo: '30 58 138',
  rgbGrey: '98 101 99',

  background: 'rgb(var(--rgbBackground) / 1)',
  backgroundLight: 'rgb(var(--rgbBackgroundLight) / 1)',
  primary: 'rgb(var(--rgbPrimary) / 1)',
  secondary: 'rgb(var(--rgbSecondary) / 1)',
  accent: 'rgb(var(--rgbAccent) / 1)',
  success: 'rgb(var(--rgbSuccess) / 1)',
  error: 'rgb(var(--rgbError) / 1)',
  warning: 'rgb(var(--rgbWarning) / 1)',
  info: 'rgb(var(--rgbInfo) / 1)',
  grey: 'rgb(var(--rgbGrey) / 1)',
  textTitle: 'rgb(var(--rgbText) / 1)',
  textBody: 'rgb(var(--rgbText) / 0.8)',
  textLight: 'rgb(var(--rgbText) / 0.6)',
  white: '#ffffff',
  black: '#000000',
};

export type ThemeColor =
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

const light = {
  themeId: 'light',
  rgbBackground: '242 242 242', //main page background
  rgbBackgroundLight: '255 255 255', //secondary background for boxes
  rgbPrimary: '19 97 240', //cta1
  rgbSecondary: '222 64 64', //cta2
  rgbAccent: '64 222 222', //main cta
  rgbText: '0 0 0',
  rgbSuccess: '12 132 37',
  rgbError: '255 0 60',
  rgbWarning: '249 115 22',
  rgbInfo: '30 58 138',
  rgbGrey: '98 101 99',

  background: 'rgb(var(--rgbBackground) / 1)',
  backgroundLight: 'rgb(var(--rgbBackgroundLight) / 1)',
  primary: 'rgb(var(--rgbPrimary) / 1)',
  secondary: 'rgb(var(--rgbSecondary) / 1)',
  accent: 'rgb(var(--rgbAccent) / 1)',
  success: 'rgb(var(--rgbSuccess) / 1)',
  error: 'rgb(var(--rgbError) / 1)',
  warning: 'rgb(var(--rgbWarning) / 1)',
  info: 'rgb(var(--rgbInfo) / 1)',
  grey: 'rgb(var(--rgbGrey) / 1)',
  textTitle: 'rgb(var(--rgbText) / 1)',
  textBody: 'rgb(var(--rgbText) / 0.8)',
  textLight: 'rgb(var(--rgbText) / 0.6)',
  white: '#ffffff',
  black: '#000000',
};

export const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall,
};

export const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400,
};

export const mediaScreen = {
  minLaptop: `@media screen and (min-width: ${media.laptop}px)`,
  minTablet: `@media screen and (min-width: ${media.tablet}px) and (max-width: ${media.laptop}px)`,
  minMobile: `@media screen and (min-width: ${media.mobileS}px) and (max-width: ${media.tablet}px)`,
  maxMobileS: `@media screen and (max-width: ${media.mobileS}px)`,
};

export type ThemeToken = typeof baseTokens;
export type ThemeTokens = Record<string, Partial<ThemeToken>>;

export type Theme = typeof dark;
export type Themes = Record<string, Partial<Theme>>;

export const themes = { dark, light };
