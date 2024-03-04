import {
  Text,
  UserIcon,
  Image,
  Box,
  Row,
  CommonStyleProps,
  parseProps,
  SimpleGrid,
} from '@bearon/ui';
import { ReactElement } from 'react';
import { BlogTags } from './BlogCard1';

interface BlogCard3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<CommonStyleProps, 'color'> {
  img?: string;
  title?: string;
  desc?: string;
  pubDate?: string;
  author?: string;
  tags?: { label: string; color?: string }[];
  descMaxLine?: number;
  titleMaxLine?: number;
  maxWidth?: string;
  authorEl?: ReactElement;
  readTime?: string;
}

export function BlogCard3({
  title,
  img,
  desc,
  pubDate,
  author,
  titleMaxLine = 2,
  descMaxLine = 1,
  maxWidth = '640px',
  readTime,
  tags,
  authorEl,
  ...props
}: BlogCard3Props) {
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
        {authorEl || (
          <Row gap="6px">
            <UserIcon color="textLight" size="16px" />
            <Text size="xs" color="textLight">
              {author}
            </Text>
          </Row>
        )}
        <Text maxLine={titleMaxLine} size="lg" weight="700">
          {title}
        </Text>

        <Text
          maxLine={descMaxLine}
          color="textBody"
          size="sm"
          className="blog-desc"
        >
          {desc}
        </Text>

        <Row mt="0.5rem" gap="6px">
          {pubDate && (
            <Text color="textLight" size="xs">
              {pubDate}
              {!!readTime && ' -'}
            </Text>
          )}
          {readTime && (
            <Text color="textLight" size="xs">
              {readTime}
            </Text>
          )}
          <BlogTags tags={tags} className="blog-tags" />
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
            maxWidth: '180px',
            objectFit: 'cover',
          }}
          br="0"
          sxSm={{
            width: '100%',
            maxWidth: 'unset',
            maxHeight: '140px',
          }}
        />
      </Box>
    </SimpleGrid>
  );
}
