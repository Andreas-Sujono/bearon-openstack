import { Image } from '../../Image';
import { Box, Row, SimpleGrid } from '../../Layout';
import { Text } from '../../Text';
import { CommonStyleProps, parseProps } from '../../utils';

interface BlogCard2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<CommonStyleProps, 'color'> {
  img?: string;
  title?: string;
  desc?: string;
  pubDate?: string;
  author?: string;
  tags?: { label: string; color: string }[];
  descMaxLine?: number;
  titleMaxLine?: number;
  maxWidth?: string;
}

export function BlogCard2({
  title,
  img,
  desc,
  pubDate,
  author,
  titleMaxLine = 2,
  descMaxLine = 4,
  maxWidth = 'var(--maxWidthMd)',
  ...props
}: BlogCard2Props) {
  return (
    <SimpleGrid
      sx={{ width: '100%', maxWidth, boxShadow: 'var(--boxShadowMd)' }}
      wrap
      background="backgroundLight"
      br="0.5rem"
      templateColumns="auto auto"
      sxSm={{
        gridTemplateColumns: 'auto',
      }}
      {...parseProps(props)}
    >
      <Box>
        <Image
          srcs={[
            img || '',
            'https://fomantic-ui.com/images/wireframe/image.png',
          ]}
          sx={{
            height: '100%',
            maxWidth: '180px',
            objectFit: 'cover',
          }}
          br="0.5rem 0 0 0.5rem"
          sxSm={{
            borderRadius: '0.5rem 0.5rem 0 0',
            width: '100%',
            maxWidth: 'unset',
            maxHeight: '140px',
          }}
        />
      </Box>
      <Box p="0.5rem 1rem">
        <Text maxLine={titleMaxLine} size="md" weight="700">
          {title}
        </Text>

        <Row>
          {pubDate && (
            <Text color="textLight" size="xs">
              {pubDate}
              {author && ' -'}&nbsp;
            </Text>
          )}
          {author && (
            <Text color="textLight" size="xs">
              By {author}
            </Text>
          )}
        </Row>

        <Text maxLine={descMaxLine} mt="0.5rem" color="textBody" size="xs">
          {desc}
        </Text>
      </Box>
    </SimpleGrid>
  );
}
