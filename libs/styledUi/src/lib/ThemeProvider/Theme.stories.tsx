import React from 'react';
import { css } from 'goober';
import { Text } from '../Text/Text';
import { themes, tokens } from './theme';
import type { Meta } from '@storybook/react';
import { Box } from '../Layout/Box';
import { SimpleGrid } from '../Layout/SimpleGrid';
import { classes } from '../utils';

const boxClass = css`
  width: 100%;
  box-sizing: border-box;
  height: 100%;
`;
const cellClass = css`
  padding: 8px 12px;
  border-bottom: 1px solid #dedcdc;
  color: var(--textLight);
`;
const titleClass = css`
  color: var(--textTitle);
`;

const meta: Meta = {
  title: 'Foundation/Theme',
  render: () => <>1</>,
};
export default meta;

const allLightRgbColors = Object.keys(themes.light).filter(
  (item) => item !== 'themeId'
);
const allDarkRgbColors = Object.keys(themes.dark).filter(
  (item) => item !== 'themeId'
);

export const LightTheme = {
  render: () => {
    return (
      <Box sx={{ maxWidth: '800px' }}>
        <SimpleGrid templateColumns="auto auto  auto">
          <Text className={classes(cellClass, titleClass)} weight="medium">
            Variable
          </Text>
          <Text className={classes(cellClass, titleClass)} weight="medium">
            RGB/Hex
          </Text>
          <Text className={classes(cellClass, titleClass)} weight="medium">
            Colours
          </Text>

          {allLightRgbColors.map((key) => {
            return (
              <React.Fragment key={key}>
                <Text className={cellClass}>{key}</Text>
                <Text className={cellClass}>
                  {themes.light[key as 'background']}
                </Text>
                <div
                  className={classes(boxClass, cellClass)}
                  style={{
                    background: `${themes.light[key as 'background']}`,
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
        <SimpleGrid templateColumns="auto auto auto">
          <Text className={classes(cellClass, titleClass)} weight="medium">
            Variable
          </Text>
          <Text className={classes(cellClass, titleClass)} weight="medium">
            RGB/Hex
          </Text>
          <Text className={classes(cellClass, titleClass)} weight="medium">
            Colours
          </Text>

          {allDarkRgbColors.map((key) => {
            return (
              <React.Fragment key={key}>
                <Text className={cellClass}>{key}</Text>
                <Text className={cellClass}>
                  {themes.dark[key as 'background']}
                </Text>
                <div
                  className={classes(boxClass, cellClass)}
                  style={{
                    background: `${themes.dark[key as 'background']}`,
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
