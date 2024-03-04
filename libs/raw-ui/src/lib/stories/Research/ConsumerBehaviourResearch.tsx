import Box from '../../Layout/Box';
import Row from '../../Layout/Row';
import Text, { Heading } from '../../Text';
import PageSection from '../../Layout/PageSection';
import './Styles.scss';

export const ConsumerBehaviourResearch = (): JSX.Element => {
  return (
    <PageSection maxWidth="lg">
      <Row gap="1.5rem">
        <Heading level={2} as="h1">
          UI/UX Research
        </Heading>
        <img src="https://svgshare.com/i/zyf.svg" width={100} alt="Bearon UI" />
      </Row>

      <Box mt="3rem">
        <Heading level={4} weight="500">
          Offer Relevant Autocomplete Suggestions for Closely Misspelled Search
          Terms and Queries (69% Don’t)
        </Heading>
        <Text display="block">By Baymard Insitute</Text>
        <Text mt="1rem">
          https://baymard.com/blog/offer-autocomplete-suggestions-for-misspellings
        </Text>
      </Box>

      <Box mt="3rem">
        <Heading level={4} weight="500">
          SEO, increasing your site traffic
        </Heading>
        <Text display="block">By Andreas Sujono</Text>
        <Text mt="1rem">
          https://andreassujono.medium.com/introduction-to-seo-free-marketing-for-your-site-all-you-need-to-know-about-seo-f2902180002e
        </Text>
      </Box>
    </PageSection>
  );
};
