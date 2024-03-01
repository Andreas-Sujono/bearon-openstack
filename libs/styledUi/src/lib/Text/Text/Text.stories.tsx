import type { Meta } from '@storybook/react';
import { Text } from '.';
import { Box } from '../../Layout';
import { EllipsisText, MiddleEllipsisText } from './TextEllipsis';
import styled from 'styled-components';

const meta: Meta<typeof Text> = {
  title: 'Foundation/Typography',
  component: Text,
  tags: ['autodocs'],
};
export default meta;

export const Sizes = {
  render: () => {
    return (
      <div>
        <Text size="xs">Typography xs</Text> <br />
        <Text size="sm">Typography sm</Text>
        <br />
        <Text size="md">Typography md</Text>
        <br />
        <Text size="lg">Typography lg</Text>
        <br />
        <Text size="xl">Typography xl</Text>
        <br />
        <Text size="h5">Typography h5</Text>
        <br />
        <Text size="h4">Typography h4</Text>
        <br />
        <Text size="h3">Typography h3</Text>
        <br />
        <Text size="h2">Typography h2</Text>
        <br />
        <Text size="h1">Typography h1</Text>
        <br />
      </div>
    );
  },
};

const StyledMuiText2 = styled(Text).attrs({
  weight: '700',
  sx: {
    FontFamily: 'var(--orbitron)',
    fontSize: {
      lg: '3.9rem',
      md: '3.5rem',
      sm: '2rem',
    },
    lineHeight: '120%',
    textAlign: 'center',
    maxWidth: '1280px',
    display: 'inline-block',
    margin: 'auto',
    width: '100%',
    whiteSpace: {
      sm: 'initial',
      md: 'nowrap',
    },
  },
})``;

const StyledMuiText3 = styled(Text).attrs({
  component: 'h1',
  weight: '700',
  sx: {
    FontFamily: 'var(--orbitron)',
    fontSize: {
      lg: '3.9rem',
      md: '3.5rem',
      sm: '2rem',
    },
    lineHeight: '120%',
    textAlign: 'center',
    maxWidth: '1280px',
    display: 'inline-block',
    margin: 'auto',
    width: '100%',
    whiteSpace: {
      sm: 'initial',
      md: 'nowrap',
    },
  },
})``;

export const TextMuiStyle = {
  render: () => {
    return (
      <div>
        <Text
          size="h2"
          component="h2"
          sx={{
            color: {
              lg: 'grey',
              md: 'red',
              sm: 'blue',
            },
            fontSize: {
              lg: '2.5rem',
              md: '2rem',
              sm: '1rem',
            },
            textAlign: {
              sm: 'center',
              md: 'left',
            },
            mb: {
              md: '2rem',
              lg: '1rem',
            },
            pr: '1rem',
          }}
          display="block"
        >
          Typography
        </Text>
        <StyledMuiText2>Typography2</StyledMuiText2>
        <StyledMuiText3>Typography3</StyledMuiText3>
        <Text
          size="h2"
          component="h2"
          sx={{
            '&::before': {
              content: '',
              width: '100px',
              height: '2px',
              backgroundColor: 'grey',
              display: 'block',
            },
          }}
          display="block"
        >
          Typography4
        </Text>
      </div>
    );
  },
};

export const AutomaticReponsiveText = {
  render: () => {
    return (
      <Box>
        <Text display="block" size="h3" weight="600">
          React Labs: What We've Been Working On – February 2024
        </Text>
        <Text display="block" size="md" mt="0.5rem" color="textLight">
          <em>
            February 15, 2024 by Joseph Savona, Ricky Hanlon, Andrew Clark, Matt
            Carroll, and Dan Abramov.
          </em>
        </Text>
        <Text display="block" mt="1rem">
          In React Labs posts, we write about projects in active research and
          development. We’ve made significant progress since our last update,
          and we’d like to share our progress.
        </Text>

        <Text display="block" size="lg" mt="1rem" weight="600">
          React Compiler
        </Text>
        <Text display="block" mt="1rem">
          React Compiler is no longer a research project: the compiler now
          powers instagram.com in production, and we are working to ship the
          compiler across additional surfaces at Meta and to prepare the first
          open source release.
        </Text>
        <Text display="block" mt="1rem">
          As discussed in our previous post, React can sometimes re-render too
          much when state changes. Since the early days of React our solution
          for such cases has been manual memoization. In our current APIs, this
          means applying the useMemo, useCallback, and memo APIs to manually
          tune how much React re-renders on state changes. But manual
          memoization is a compromise. It clutters up our code, is easy to get
          wrong, and requires extra work to keep up to date.
        </Text>
        <Text display="block" mt="1rem">
          Manual memoization is a reasonable compromise, but we weren’t
          satisfied. Our vision is for React to automatically re-render just the
          right parts of the UI when state changes, without compromising on
          React’s core mental model. We believe that React’s approach — UI as a
          simple function of state, with standard JavaScript values and idioms —
          is a key part of why React has been approachable for so many
          developers. That’s why we’ve invested in building an optimizing
          compiler for React.
        </Text>
      </Box>
    );
  },
};

export const TextWebkit = {
  render: () => {
    return (
      <div>
        <Text
          sx={{
            mt: '1rem',
            maxHeight: '140px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 5,
            lineClamp: 5,
            WebkitBoxOrient: 'vertical',
            maxWidth: '300px',
          }}
        >
          Native, the groundbreaking financial infrastructure layer, and Cypher
          Capital, the leading MENA Web3 venture capital fund, are thrilled to
          announce a newly forged partnership and funding agreement that will
          propel Native's impressive growth and further revolutionize the
          financial landscape in the Middle East and North Africa MENA region.
        </Text>
      </div>
    );
  },
};

export const TextMaxLine = {
  render: () => {
    return (
      <div>
        <Text maxLine={5}>
          Native, the groundbreaking financial infrastructure layer, and Cypher
          Capital, the leading MENA Web3 venture capital fund, are thrilled to
          announce a newly forged partnership and funding agreement that will
          propel Native's impressive growth and further revolutionize the
          financial landscape in the Middle East and North Africa MENA region.
          Native, the groundbreaking financial infrastructure layer, and Cypher
          Capital, the leading MENA Web3 venture capital fund, are thrilled to
          announce a newly forged partnership and funding agreement that will
          propel Native's impressive growth and further revolutionize the
          financial landscape in the Middle East and North Africa MENA region.
          Native, the groundbreaking financial infrastructure layer, and Cypher
          Capital, the leading MENA Web3 venture capital fund, are thrilled to
          announce a newly forged partnership and funding agreement that will
          propel Native's impressive growth and further revolutionize the
          financial landscape in the Middle East and North Africa MENA region.
          Native, the groundbreaking financial infrastructure layer, and Cypher
          Capital, the leading MENA Web3 venture capital fund, are thrilled to
          announce a newly forged partnership and funding agreement that will
          propel Native's impressive growth and further revolutionize the
          financial landscape in the Middle East and North Africa MENA region.
          Native, the groundbreaking financial infrastructure layer, and Cypher
          Capital, the leading MENA Web3 venture capital fund, are thrilled to
          announce a newly forged partnership and funding agreement that will
          propel Native's impressive growth and further revolutionize the
          financial landscape in the Middle East and North Africa MENA region.
        </Text>
      </div>
    );
  },
};

export const TextEllipsis = {
  render: () => {
    return (
      <Box maxWidth="300px">
        <EllipsisText text="Native, the groundbreaking financial infrastructure layer, and Cypher Capital" />
      </Box>
    );
  },
};

export const TextMiddleEllipsis = {
  render: () => {
    return (
      <Box maxWidth="300px">
        <MiddleEllipsisText
          text="Native, the groundbreaking financial infrastructure layer,and Cypher Capital"
          size="xs"
          offset="-1rem"
        />
        <MiddleEllipsisText
          text="Native, the groundbreaking financial infrastructure layer,and Cypher Capital"
          offset="-1.25rem"
        />
        <MiddleEllipsisText
          text="Native, the groundbreaking financial infrastructure layer,and Cypher Capital"
          size="lg"
          offset="-1.5rem"
        />
        <MiddleEllipsisText
          text="Native, the groundbreaking financial infrastructure layer,and Cypher Capital"
          size="h5"
          offset="-1.75rem"
        />
        <MiddleEllipsisText
          text="Native, the groundbreaking financial infrastructure layer,and Cypher Capital"
          size="h4"
          offset="-2.25rem"
        />
      </Box>
    );
  },
};
