import Box from '../../Layout/Box';
import Row from '../../Layout/Row';
import Text, { Heading } from '../../Text';
import PageSection from '../../Layout/PageSection';
import './Styles.scss';

export const SourcesResearch = (): JSX.Element => {
  return (
    <PageSection maxWidth="lg">
      <Row gap="1.5rem">
        <Heading level={1}>Frontend Sources</Heading>
        <img src="https://svgshare.com/i/zyf.svg" width={100} alt="Bearon UI" />
      </Row>

      <Box mt="3rem">
        <Heading level={3}>Twitter Influencer</Heading>
        <ul>
          <li>
            Dan Abramov: @danabrm <Text></Text>
          </li>
        </ul>
      </Box>

      <Box mt="3rem">
        <Heading level={3}>NewsLetter</Heading>
        <ul>
          <li>Dan Abramov: @danabrm</li>
        </ul>
      </Box>

      <Box mt="3rem">
        <Heading level={3}>Youtube</Heading>
        <ul>
          <li>Dan Abramov: @danabrm</li>
        </ul>
      </Box>

      <Box mt="3rem">
        <Heading level={3}>Reading</Heading>
        <ul>
          <li>Dan Abramov: @danabrm</li>
        </ul>
      </Box>

      <Box mt="3rem">
        <Heading level={3}>Other Sources</Heading>
        <ul>
          <li>Dan Abramov: @danabrm</li>
        </ul>
      </Box>
    </PageSection>
  );
};
