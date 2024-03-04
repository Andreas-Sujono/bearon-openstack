import { bearCss, classes, rgbToHex } from '@bearon/utils';
import React from 'react';
import SimpleGrid from '../Layout/SimpleGrid';
import Text from '../Text';
import Box from '../Layout/Box';
import { themes, tokens } from './theme';
import type { Meta } from '@storybook/react';

const boxClass = bearCss`
  width: 100%;
  box-sizing: border-box;
  height: 100%;
`;
const cellClass = bearCss`
  padding: 8px 12px;
  border-bottom: 1px solid #dedcdc;
  color: var(--textLight);
`;
const titleClass = bearCss`
  color: var(--textTitle);
`;

const meta: Meta = {
  title: 'Foundation/Theme',
  render: () => <>1</>,
};
export default meta;

const allLightRgbColors = Object.keys(themes.light).filter((item) =>
  item.startsWith('rgb')
);
const allDarkRgbColors = Object.keys(themes.dark).filter((item) =>
  item.startsWith('rgb')
);

export const LightTheme = {
  render: () => {
    return (
      <Box sx={{ maxWidth: '800px' }}>
        <SimpleGrid templateColumns="auto auto  auto auto">
          <Text className={classes(cellClass, titleClass)} weight="medium">
            Variable
          </Text>
          <Text className={classes(cellClass, titleClass)} weight="medium">
            RGB
          </Text>
          <Text className={classes(cellClass, titleClass)} weight="medium">
            Hex
          </Text>
          <Text className={classes(cellClass, titleClass)} weight="medium">
            Colours
          </Text>

          {allLightRgbColors.map((key) => {
            let varKey = key.replace('rgb', '');
            varKey = varKey[0].toLowerCase().concat(varKey.slice(1));
            if (varKey === 'text') {
              varKey = 'textTitle';
            }

            return (
              <React.Fragment key={key}>
                <Text className={cellClass}>--{varKey}</Text>
                <Text className={cellClass}>
                  {themes.light[key as 'rgbText']}
                </Text>
                <Text className={cellClass}>
                  {rgbToHex(themes.light[key as 'rgbText'])}
                </Text>
                <div
                  className={classes(boxClass, cellClass)}
                  style={{
                    background: `rgb(${themes.light[key as 'rgbText']} / 1)`,
                  }}
                ></div>
              </React.Fragment>
            );
          })}
        </SimpleGrid>
      </Box>
    );
  },
};

export const darkTheme = {
  render: () => {
    return (
      <Box sx={{ maxWidth: '800px' }}>
        <SimpleGrid templateColumns="auto auto auto auto">
          <Text className={classes(cellClass, titleClass)} weight="medium">
            Variable
          </Text>
          <Text className={classes(cellClass, titleClass)} weight="medium">
            RGB
          </Text>
          <Text className={classes(cellClass, titleClass)} weight="medium">
            Hex
          </Text>
          <Text className={classes(cellClass, titleClass)} weight="medium">
            Colours
          </Text>

          {allDarkRgbColors.map((key) => {
            let varKey = key.replace('rgb', '');
            varKey = varKey[0].toLowerCase().concat(varKey.slice(1));
            if (varKey === 'text') {
              varKey = 'textTitle';
            }
            return (
              <React.Fragment key={key}>
                <Text className={cellClass}>--{varKey}</Text>
                <Text className={cellClass}>
                  {themes.dark[key as 'rgbText']}
                </Text>
                <Text className={cellClass}>
                  {rgbToHex(themes.light[key as 'rgbText'])}
                </Text>
                <div
                  className={classes(boxClass, cellClass)}
                  style={{
                    background: `rgb(${themes.dark[key as 'rgbText']} / 1)`,
                  }}
                ></div>
              </React.Fragment>
            );
          })}
        </SimpleGrid>
      </Box>
    );
  },
};

export const utilities = {
  render: () => {
    return (
      <Box sx={{ maxWidth: '600px' }}>
        <SimpleGrid templateColumns="auto auto">
          <Text className={classes(cellClass, titleClass)} weight="medium">
            Variable
          </Text>
          <Text className={classes(cellClass, titleClass)} weight="medium">
            value
          </Text>

          {Object.keys(tokens.base).map((key) => {
            return (
              <React.Fragment key={key}>
                <Text className={cellClass}>--{key}</Text>
                <Text className={cellClass}>
                  {tokens.base[key as 'fontSizeH0']}
                </Text>
              </React.Fragment>
            );
          })}
        </SimpleGrid>
      </Box>
    );
  },
};
