import styled from 'styled-components';
import { SimpleGrid } from './SimpleGrid';
import { Box } from './Box';
import { Row as RowComponent } from './Row';
import { Column as ColumnComponent } from './Column';
import { GradientBorderBox } from './GradientBorderBox';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof SimpleGrid> = {
  title: 'Foundation/Layout',
  component: SimpleGrid,
  tags: ['autodocs'],
};
export default meta;

const StyledBox = styled(Box)`
  padding: 1rem;
  height: 200px;
  background-color: grey;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const SimpleGridExample = {
  render: () => {
    return (
      <SimpleGrid
        spacing="1rem"
        justifyContent="center"
        alignItems="center"
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        <StyledBox>1</StyledBox>
        <StyledBox>2</StyledBox>
        <StyledBox>3</StyledBox>
        <StyledBox>4</StyledBox>
        <StyledBox>5</StyledBox>
        <StyledBox>6</StyledBox>
        <StyledBox>7</StyledBox>
        <StyledBox>8</StyledBox>
        <StyledBox>9</StyledBox>
      </SimpleGrid>
    );
  },
};

const StyledBox2 = styled(Box)`
  padding: 1rem;
  height: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const BoxResponsive = {
  render: () => {
    return (
      <StyledBox2
        sx={{
          background: 'grey',
        }}
        sxMd={{
          background: 'blue',
        }}
        sxSm={{
          background: 'red',
        }}
      >
        try to resize the window
      </StyledBox2>
    );
  },
};

export const BoxResponsiveMui = {
  render: () => {
    return (
      <StyledBox2
        sx={{
          background: {
            sm: 'red',
            md: 'blue',
            lg: 'grey',
          },
          marginTop: {
            sm: '1rem',
            md: '2rem',
            lg: '3rem',
          },
        }}
      >
        try to resize the window
      </StyledBox2>
    );
  },
};

export const MuiStyleSx = {
  render: () => {
    return (
      <Box
        sx={{
          '> div': {
            border: '1px solid grey',
            mt: '1rem',
            p: {
              sm: '1rem',
              md: '2rem',
              lg: '3rem',
            },
            '> span': {
              color: 'red',
            },
          },
        }}
      >
        <div>
          <span>test</span>
        </div>
      </Box>
    );
  },
};

const StyledRow = styled(Box)`
  padding: 1rem;
  height: 200px;
  background-color: grey;
  color: white;
  flex: 1 1 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
export const Row = {
  render: () => {
    return (
      <RowComponent gap="1rem">
        <StyledRow>1</StyledRow>
        <StyledRow>2</StyledRow>
        <StyledRow>3</StyledRow>
      </RowComponent>
    );
  },
};

const StyledColumn = styled(ColumnComponent)`
  padding: 1rem;
  height: 200px;
  background-color: grey;
  color: white;
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
export const Column = {
  render: () => {
    return (
      <ColumnComponent gap="1rem">
        <StyledColumn>column 1</StyledColumn>
        <StyledColumn>column 2</StyledColumn>
        <StyledColumn>column 3</StyledColumn>
      </ColumnComponent>
    );
  },
};

export const GradientBorder = {
  render: () => {
    return (
      <GradientBorderBox
        gradient="linear-gradient(99.87deg, #E949A5 42.59%, #4E28DB)"
        borderWidth="4px"
        containerStyle={{
          maxWidth: '400px',
        }}
      >
        <RowComponent
          sx={{
            padding: '1rem',
          }}
        >
          test
        </RowComponent>
      </GradientBorderBox>
    );
  },
};

export const MuiStyle = {
  render: () => {
    return (
      <RowComponent
        sx={{
          padding: {
            md: '7px 12px',
            lg: '7px 12px',
            sm: '6px 4px',
          },
          background: 'lightgray',
          cursor: 'pointer',
          border: `1px solid #26262b`,
          transition: 'all 0.12s ease-in-out',
          borderRadius: 0,
          '&:hover': {
            border: `1px solid grey`,
            borderRightColor: 'grey !important',
          },
          '&:focus-visible': {
            border: `1px solid grey`,
            borderRightColor: 'grey !important',
          },
        }}
        sxSm={{
          padding: '0px 8px',
        }}
        className="nav-clickable-item"
        role="button"
        tabIndex={0}
      >
        teset
      </RowComponent>
    );
  },
};

export const CommonStyleAbbreviated = {
  render: () => {
    return (
      <>
        <Box background="grey" color="white" br="1rem" p="1rem">
          Line1
        </Box>
        <Box
          background="lightblue"
          color="white"
          br="0.5rem"
          p="1rem"
          mt="1rem"
        >
          Line2
        </Box>
        <Box
          background="pink"
          color="white"
          br="0.5rem"
          pr="1rem"
          pl="1rem"
          pt="1rem"
          pb="1rem"
          mt="1rem"
          mb="1rem"
          mr="1rem"
          ml="1rem"
        >
          Line2
        </Box>
      </>
    );
  },
};
