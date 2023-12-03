import Box from '../../Layout/Box';
import Row from '../../Layout/Row';
import Text, { Heading } from '../../Text';
import PageSection from '../../Layout/PageSection';
import './Styles.scss';

export const Research = (): JSX.Element => {
  return (
    <PageSection maxWidth="lg">
      <Row gap="1.5rem">
        <Heading level={2}>UI Framework Research</Heading>
        <img src="https://svgshare.com/i/zyf.svg" width={100} alt="Bearon UI" />
      </Row>

      <Box mt="3rem">
        <Heading level={4}>1. Material UI</Heading>
        <ul>
          <li>
            <strong>Size (Unpacked):</strong> 10.2 MB
          </li>
          <li>
            <strong>Supported Components:</strong> 99% covered, lack of
            animation component and hooks support.
          </li>
          <li>
            <strong>Component Segregation:</strong> low
            <ul>
              <li>
                <Text display="block">
                  Basic Components and functionality are all stored in
                  `@mui/material`, Other alternative are Joy UI, base UI, MUI
                  system which are just a subset of `@mui/material` package.
                  Icon library is separated into `@mui/icons-material` which has
                  dependency to `@mui/material`
                </Text>
              </li>
              <li>
                <Text display="block">
                  For more advance components such as data grid, data and time
                  picker, charts, and tree view are separated into different
                  components. The basic functionality is free, but more advanced
                  features require a Pro or Premium commercial license.
                </Text>
              </li>
            </ul>
          </li>
          <li>
            <strong>Customization:</strong> full customizations, enable to
            extends theme, spacing, sizing, etc.
          </li>
          <li>
            <strong>Styling Structure: </strong> enable a fully customizations
            that works like CSS in Js library inside `sx` props that has access
            to the theme and handle responsiveness.
          </li>
          <li>
            <strong>Responsiveness:</strong> handled inside their styling
            structure
          </li>
          <li>
            <strong>Accessibility:</strong> high, as expected from industry
            level framework
          </li>
          <li>
            <strong>Dependency Level:</strong> really high, depends on React
            version, CSS in Js library (styled component, or emotion), internal
            styling system that is too complex to modify
          </li>
        </ul>
        {/* <Text>Size: , Many Dependencies, </Text>
          <Text>
            Component Design: support customizable via ThemeContext, styling via
            `sx` props where it works similar with Styled component or emotion,
          </Text> */}
      </Box>

      <Box mt="3rem">
        <Heading level={4}>2. Ant Design</Heading>
        <Text color="textLight">Pending</Text>
      </Box>

      <Box mt="3rem">
        <Heading level={4}>3. Chakra UI</Heading>
        <Text color="textLight">Pending</Text>
      </Box>
    </PageSection>
  );
};
