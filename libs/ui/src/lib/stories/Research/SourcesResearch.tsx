import Box from '../../Layout/Box';
import Row from '../../Layout/Row';
import Text, { Heading } from '../../Text';
import PageSection from '../../Layout/PageSection';
import './Styles.scss';

export const SourcesResearch = (): JSX.Element => {
  return (
    <PageSection maxWidth="lg">
      <Row gap="1.5rem">
        <Heading level={2}>Frontend Sources</Heading>
        <img src="https://svgshare.com/i/zyf.svg" width={100} alt="Bearon UI" />
      </Row>

      <Box mt="3rem">
        <Heading level={4}>Twitter Influencer</Heading>
        <ul>
          {twitterSources.map((item) => (
            <li key={item.username}>
              {item.name}: {item.username}{' '}
              <Text display="block" ml="1rem">
                {item.desc}
              </Text>
            </li>
          ))}
        </ul>
      </Box>

      <Box mt="3rem">
        <Heading level={4}>NewsLetter</Heading>
        <ul>
          {newsletterSources.map((item) => (
            <li key={item.name}>
              {item.name}
              <Text display="block" ml="1rem">
                {item.desc}
              </Text>
            </li>
          ))}
        </ul>
      </Box>

      <Box mt="3rem">
        <Heading level={4}>Youtube</Heading>
        <ul>
          {youtubeSources.map((item) => (
            <li key={item.name}>
              {item.name}
              <Text display="block" ml="1rem">
                {item.desc}
              </Text>
            </li>
          ))}
        </ul>
      </Box>

      {/* <Box mt="3rem">
        <Heading level={4}>Reading</Heading>
        <ul>
          <li>Dan Abramov: @danabrm</li>
        </ul>
      </Box>

      <Box mt="3rem">
        <Heading level={4}>Other Sources</Heading>
        <ul>
          <li>Dan Abramov: @danabrm</li>
        </ul>
      </Box> */}
    </PageSection>
  );
};

/**
 * sources: https://techbeacon.com/app-dev-testing/27-javascript-experts-follow-twitter
 */
const twitterSources = [
  {
    username: '@dan_abramov',
    name: 'Dan Abramov',
    desc: 'Co-authoring Redux as well as the Create React App',
  },
  {
    username: '@sophiebits',
    name: 'Sophie Alpert',
    desc: 'Alpert worked at Facebook as an engineering manager for the ReactJS team. ',
  },
  {
    username: '@wesbos',
    name: 'Wes Bos',
    desc: '',
  },
  {
    username: '@manekinekko',
    name: 'Wassim Chegham',
    desc: '',
  },
  {
    username: '@acdlite',
    name: 'Wassim Chegham',
    desc: 'Core team, ReactJS. Clark shares thoughts, tips, and news about JavaScript programming on his Twitter feed.',
  },
];

const youtubeSources = [
  {
    username: '',
    name: 'FreeCodeCamp',
    desc: '',
  },
  {
    username: '',
    name: 'Kevin Powell',
    desc: '',
  },
  {
    username: '',
    name: 'Hyperflexed',
    desc: '',
  },
];

const newsletterSources = [
  {
    name: 'This Week In React',
    desc: '',
  },
  {
    name: 'bytes.dev',
    desc: '',
  },
  {
    name: "Stephan's Web Weekly",
    desc: '',
  },
  {
    name: 'Frontend focus',
    desc: '',
  },
  {
    name: 'The A11y project newsletter',
    desc: '',
  },
];
