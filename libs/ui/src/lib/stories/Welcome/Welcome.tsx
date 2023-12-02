import { LightbulbIcon } from '@bearon/icon';
import Box from '../../Layout/Box';
import Row from '../../Layout/Row';
import Text, { Heading } from '../../Text';
import PageSection from '../../Layout/PageSection';

export const Welcome = (): JSX.Element => {
  return (
    <PageSection maxWidth="lg">
      <Row gap="1.5rem">
        <Heading level={1}>Welcome to</Heading>
        <img src="https://svgshare.com/i/zyf.svg" width={200} alt="Bearon UI" />
      </Row>
      <Box mt="1rem">
        <Text>
          BearonUI is part of Bearon Open Source Project that has goal to unify
          and generalize UI frameworks. While there's a lot of mature frameworks
          such as Material UI, Ant Design, Chakra UI, it's not well suited for
          an enterprise projects which leads to many big companies starts to
          create their own UI framework that suit their usecase and application.
        </Text>

        <Text mt="1rem" display="block">
          BearonUI acts as an UI framework Foundation which is composable,
          customizable, and most importantly easy to understand as there's no
          complex function dependencies. This is useful for beginner to
          understand how React component function works, as well for startup and
          companies to develop their own UI framwork.
        </Text>

        <Row mt="2rem">
          <LightbulbIcon />
          <Text>
            Protip: Press '/' and start typing to search for a component
          </Text>
        </Row>
      </Box>
    </PageSection>
  );
};
