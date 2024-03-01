import { Badge } from '../../Badge';
import { DateIcon, UserIcon } from '../../Icon';
import { Image } from '../../Image';
import { Box, Row } from '../../Layout';
import { Text, TextVariant } from '../../Text';
import { CommonStyleProps, parseProps } from '../../utils';

interface BlogCard1Props
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
}

export function BlogTags({
  tags,
  size = 'xs',
  ...props
}: {
  tags?: { label: string; color?: string }[];
  size?: TextVariant;
} & React.HTMLAttributes<HTMLDivElement>) {
  if (!tags) return null;

  return (
    <Row gap="6px" {...props}>
      {tags.map((tag) => (
        <Badge
          background={tag.color || 'grey'}
          backgroundOpacity={0.1}
          key={tag.label}
          size={size}
          sx={{
            padding: '4px 10px',
            borderRadius: '100px',
          }}
        >
          <Text colour={tag.color || 'grey'}>{tag.label}</Text>
        </Badge>
      ))}
    </Row>
  );
}

export function BlogAuthor({
  authorImg,
  author,
  publication,
  onClickAuthor,
  onClickPublication,
  ...props
}: {
  authorImg?: string;
  author?: string;
  publication?: string;
  onClickAuthor?: () => void;
  onClickPublication?: () => void;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Row gap="6px" p="4px 0" {...props}>
      <Image
        srcs={[
          authorImg ||
            'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',
        ]}
        sx={{ maxWidth: '20px' }}
        br="50%"
      />
      <div>
        <Text
          onClick={onClickAuthor}
          sx={{ cursor: 'pointer' }}
          color="textLight"
          size="xxs"
          weight="500"
        >
          {author}
        </Text>
        {publication && (
          <Text
            onClick={onClickPublication}
            sx={{ cursor: 'pointer' }}
            color="textLight"
            size="xxs"
            weight="500"
          >
            &nbsp;in {publication}
          </Text>
        )}
      </div>
    </Row>
  );
}

export function BlogCard1({
  title,
  img,
  desc,
  pubDate,
  author,
  titleMaxLine = 2,
  descMaxLine = 5,
  maxWidth = '360px',
  ...props
}: BlogCard1Props) {
  return (
    <Box
      sx={{ maxWidth, boxShadow: 'var(--boxShadowMd)' }}
      background="backgroundLight"
      br="0 0 0.5rem 0.5rem"
      {...parseProps(props)}
    >
      <Image
        srcs={[img || '', 'https://fomantic-ui.com/images/wireframe/image.png']}
        sx={{
          width: '100%',
          maxHeight: '200px',
          objectFit: 'cover',
        }}
        sxSm={{
          maxHeight: '140px',
        }}
        br="0.5rem 0.5rem 0 0"
      />
      <Box p="0.5rem 1rem">
        <Text maxLine={titleMaxLine} size="md" weight="700">
          {title}
        </Text>

        <Row mt="4px">
          {pubDate && (
            <>
              <DateIcon
                size="16px"
                color="textLight"
                sx={{ marginRight: '4px' }}
              />
              <Text color="textLight" size="xs">
                {pubDate} &nbsp;
              </Text>
            </>
          )}
          {author && (
            <>
              <UserIcon
                size="16px"
                color="textLight"
                sx={{ marginRight: '4px' }}
              />
              <Text color="textLight" size="xs">
                {author}
              </Text>
            </>
          )}
        </Row>

        <Text maxLine={descMaxLine} mt="0.5rem" color="textBody" size="xs">
          {desc}
        </Text>
      </Box>
    </Box>
  );
}
