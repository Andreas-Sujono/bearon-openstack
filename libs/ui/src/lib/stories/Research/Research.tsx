import Box from '../../Layout/Box';
import Row from '../../Layout/Row';
import Text, { Heading } from '../../Text';
import PageSection from '../../Layout/PageSection';
import './Styles.scss';

export const Research = (): JSX.Element => {
  return (
    <PageSection maxWidth="lg">
      <Row gap="1.5rem">
        <Heading level={1}>UI Research</Heading>
        <img src="https://svgshare.com/i/zyf.svg" width={100} alt="Bearon UI" />
      </Row>

      <Box mt="3rem">
        <Heading level={3}>UI Framework Research</Heading>
        <Box mt="2rem">
          <Heading level={4}>1. Material UI</Heading>
          <ul>
            <li>
              <strong>Size (Unpacked):</strong> 10.2 MB
            </li>
            <li>
              <strong>Supported Components:</strong> 99% covered, lack of
              animation component support, hooks support
            </li>
            <li>
              Component Segregation: Basic Components all stored in
              `@mui/material`, Other alternative are Joy UI, base UI, MUI system
              which are just a subset of `@mui/material` package.
              <Text display="block">For more advance components</Text>
            </li>
            <li>Styling Structure:</li>
            <li>Customization:</li>
            <li>Responsiveness:</li>
            <li>Accessibility:</li>
            <li>Dependency Level: really high</li>
            <li>Code Customization: Not required</li>
          </ul>
          {/* <Text>Size: , Many Dependencies, </Text>
          <Text>
            Component Design: support customizable via ThemeContext, styling via
            `sx` props where it works similar with Styled component or emotion,
          </Text> */}
        </Box>

        <Box mt="3rem">
          <Heading level={4}>2. Ant Design</Heading>
        </Box>

        <Box mt="3rem">
          <Heading level={4}>3. Chakra UI</Heading>
        </Box>
      </Box>
    </PageSection>
  );
};
