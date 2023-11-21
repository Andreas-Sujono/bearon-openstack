const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      spacing: {
        spaceOuter: 'var(--spaceOuter)',
        spaceXS: 'var(--spaceXS)',
        spaceS: 'var(--spaceS)',
        spaceM: 'var(--spaceM)',
        spaceL: 'var(--spaceL)',
        spaceXL: 'var(--spaceXL)',
        space2XL: 'var(--space2XL)',
        space3XL: 'var(--space3XL)',
        space4XL: 'var(--space4XL)',
        space5XL: 'var(--space5XL)',
      },
      fontSize: {},
      colors: {
        textTitle: 'var(--colorTextTitle)',
        textBody: 'var(--colorTextBody)',
        textLight: 'var(--colorTextLight)',
        white: 'var(--colorWhite)',
        black: 'var(--colorBlack)',
        background: 'rgb(var(--rgbBackground))',
        backgroundLight: 'rgb(var(--rgbBackgroundLight))',
        primary: 'rgb(var(--rgbPrimary))',
        accent: 'rgb(var(--rgbAccent))',
        error: 'rgb(var(--rgbError))',
      },

      // bezierFastoutSlowin
      // durationXS
      // durationS
      // durationM
      // durationL
      // durationXL
      // systemFontStack
      // fontStack
      // monoFontStack
      // fontWeightRegular
      // fontWeightMedium
      // fontWeightBold
      // fontSizeH0
      // fontSizeH1
      // fontSizeH2
      // fontSizeH3
      // fontSizeH4
      // fontSizeH5
      // fontSizeBodyXL
      // fontSizeBodyL
      // fontSizeBodyM
      // fontSizeBodyS
      // fontSizeBodyXS
      // lineHeightTitle
      // lineHeightBody
      // maxWidthS
      // maxWidthM
      // maxWidthL
      // maxWidthXL

      // zIndex0
      // zIndex1
      // zIndex2
      // zIndex3
      // zIndex4
      // zIndex5
    },
  },
  plugins: [],
};
