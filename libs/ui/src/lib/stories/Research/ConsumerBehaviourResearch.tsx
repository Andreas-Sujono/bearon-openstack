import Box from '../../Layout/Box';
import Row from '../../Layout/Row';
import Text, { Heading } from '../../Text';
import PageSection from '../../Layout/PageSection';
import './Styles.scss';

export const ConsumerBehaviourResearch = (): JSX.Element => {
  return (
    <PageSection maxWidth="lg">
      <Row gap="1.5rem">
        <Heading level={2} as="h1" weight="500">
          Consumer Behaviour Research
        </Heading>
        <img src="https://svgshare.com/i/zyf.svg" width={100} alt="Bearon UI" />
      </Row>

      <Box mt="3rem">
        <Heading level={3} weight="500">
          Searching Experience
        </Heading>
        <Text>Based on Baymard Insitute </Text>
      </Box>

      <Heading level={3} mt="4rem">
        Related Reading
      </Heading>
      <Box mt="3rem">
        <Heading level={4}>
          Accessibility, how far our site should be accessible?
        </Heading>
      </Box>

      <Box mt="3rem">
        <Heading level={4}>SEO, increasing your site traffic</Heading>
      </Box>
    </PageSection>
  );
};
