import { Box, Row, Skeleton, parseProps } from '@bearon/ui';

interface BlogCard1SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: string;
}

export function BlogCard1Skeleton({
  maxWidth = '360px',
  ...props
}: BlogCard1SkeletonProps) {
  return (
    <Box
      sx={{ width: '100%', maxWidth, boxShadow: 'var(--boxShadowMd)' }}
      background="backgroundLight"
      br="0 0 0.5rem 0.5rem"
      {...parseProps(props)}
    >
      <Skeleton w="100%" h="200px" borderRadius="0.5rem 0.5rem 0 0" />

      <Box p="0.5rem 1rem">
        <Skeleton w="100%" h="20px" />

        <Row mt="4px" gap="0.5rem">
          <Skeleton w="60px" h="12px" />
          <Skeleton w="80px" h="12px" />
        </Row>

        <Skeleton w="100%" h="12px" mt="2rem" />
        <Skeleton w="100%" h="12px" />
        <Skeleton w="100%" h="12px" />
      </Box>
    </Box>
  );
}
