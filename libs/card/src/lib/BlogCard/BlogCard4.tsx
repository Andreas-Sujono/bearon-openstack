import {
  Text,
  Image,
  Box,
  Row,
  CommonStyleProps,
  parseProps,
  SimpleGrid,
  Button,
  NotchDivider,
} from '@bearon/ui';
import { BlogTags } from './BlogCard1';

interface BlogCard4Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<CommonStyleProps, 'color'> {
  img?: string;
  title?: string;
  desc?: string;
  pubDate?: string;
  tags?: { label: string; color?: string }[];
  category?: string;
  descMaxLine?: number;
  titleMaxLine?: number;
  maxWidth?: string;
}

export function BlogCard4({
  title,
  img,
  desc,
  pubDate,
  category,
  titleMaxLine = 2,
  descMaxLine = 2,
  maxWidth = '740px',
  tags,
  ...props
}: BlogCard4Props) {
  return (
    <SimpleGrid
      sx={{ width: '100%', maxWidth }}
      sxSm={{
        '.blog-desc': {
          display: 'none',
        },
        '.blog-tags': {
          display: 'none',
        },
      }}
      wrap
      background="backgroundLight"
      br="0.5rem"
      templateColumns="auto auto"
      spacing="1rem"
      {...parseProps(props)}
    >
      <Box p="0">
        <Row gap="1rem">
          <NotchDivider lineWidth="50%" />
          <Text color="textBody" size="xs">
            {category}
          </Text>
        </Row>
        <Text maxLine={titleMaxLine} size="lg" weight="700" mt="1rem">
          {title}
        </Text>
        <BlogTags tags={tags} className="blog-tags" size="xxs" />

        <Text
          maxLine={descMaxLine}
          color="textBody"
          size="sm"
          className="blog-desc"
          mt="1rem"
        >
          {desc}
        </Text>

        <Row mt="0.5rem" gap="6px" justifyContent="space-between">
          <Button variant="text" textShift textVariant="xs">
            Read More
          </Button>
          {pubDate && (
            <Text
              color="textLight"
              size="xs"
              sx={{
                position: 'relative',
                '&::before': {
                  content: '',
                  width: '50%',
                  minWidth: '30px',
                  height: '2px',
                  backgroundColor: 'var(--textLight)',
                  opacity: '0.2',
                  display: 'block',
                  position: 'absolute',
                  left: '-60%',
                  top: '50%',
                },
              }}
            >
              {pubDate}
            </Text>
          )}
        </Row>
      </Box>
      <Box>
        <Image
          srcs={[
            img || '',
            'https://fomantic-ui.com/images/wireframe/image.png',
          ]}
          sx={{
            height: '100%',
            maxWidth: '220px',
            objectFit: 'cover',
          }}
          br="0"
          sxSm={{
            width: '100%',
            maxWidth: 'unset',
            maxHeight: '160px',
          }}
        />
      </Box>
    </SimpleGrid>
  );
}
