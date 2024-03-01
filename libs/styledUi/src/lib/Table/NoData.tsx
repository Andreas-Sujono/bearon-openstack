import { Box } from '../Layout';
import { Text } from '../Text';

interface Props {
  text: string;
}

const NoData = ({ text }: Props): JSX.Element => {
  return (
    <Box
      sx={{
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '0 0 1rem 1rem',
        minHeight: '100px',
      }}
    >
      <Text colour="textLight">{text}</Text>
    </Box>
  );
};

export { NoData };
