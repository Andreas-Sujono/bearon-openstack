import React from 'react';
import { Image } from '../../Image';
import { Box, Row } from '../../Layout';
import { Text } from '../../Text';
import { CommonStyleProps, parseColor, parseProps } from '../../utils';
import { Badge } from '../../Badge';
import { TagIcon } from '../../Icon';

interface ItemCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<CommonStyleProps, 'color'> {
  img?: string;
  name?: string;
  rating?: string;
  price?: string;
  priceDiscount?: string;
  discountTagNumber?: number;
  sold?: number;
  maxWidth?: string;
  customTopTags?: React.ReactElement;
  customBottomTags?: React.ReactElement;
}

export function DiscountTag({
  discount,
  ...props
}: { discount: number } & CommonStyleProps) {
  return (
    <Badge background="secondary" p="4px 8px" {...props}>
      <TagIcon size="16px" color="white" />
      <Text color="white" size="xxs">
        {discount}%
      </Text>
    </Badge>
  );
}

export function CustomTopTag({
  label,
  sx,
  idx = 0,
  ...props
}: { label: string; idx?: number } & CommonStyleProps) {
  const top = 1 + idx * 1.4 + 'rem';
  return (
    <Badge
      background={props.background || 'secondary'}
      backgroundOpacity={0.2}
      color={props.background || 'secondary'}
      p="2px 6px"
      sx={{
        position: 'absolute',
        top: top,
        left: '0.5rem',
        ...sx,
      }}
      {...props}
    >
      <Text size="xxs" sx={{ fontSize: '0.65rem' }}>
        {label}
      </Text>
    </Badge>
  );
}

export function CustomBottomTag({
  label,
  sx,
  idx = 0,
  ...props
}: { label: string; idx?: number } & CommonStyleProps) {
  return (
    <Badge
      background={'transparent'}
      backgroundOpacity={0.1}
      color={props.color || 'secondary'}
      p="2px 6px"
      sx={{
        border: `1px solid ${parseColor(props.color || 'secondary')} `,
        ...sx,
      }}
      {...props}
    >
      <Text size="xxs" sx={{ fontSize: '0.65rem' }}>
        {label}
      </Text>
    </Badge>
  );
}

export function ItemCard1({
  img,
  name,
  rating,
  price,
  priceDiscount,
  discountTagNumber,
  maxWidth = '250px',
  sold,
  customTopTags,
  customBottomTags,
  ...props
}: ItemCardProps) {
  return (
    <Box
      sx={{ maxWidth, boxShadow: 'var(--boxShadowMd)', position: 'relative' }}
      background="backgroundLight"
      br="0.5rem 0.5rem"
      {...parseProps(props)}
    >
      {!!discountTagNumber && (
        <DiscountTag
          discount={discountTagNumber || 0}
          sx={{
            position: 'absolute',
            top: '0.5rem',
            left: '0.5rem',
          }}
        />
      )}
      {customTopTags}
      <Image
        srcs={[img || '', 'https://fomantic-ui.com/images/wireframe/image.png']}
        sx={{
          width: '100%',
          height: '180px',
          objectFit: 'contain',
        }}
        sxSm={{
          height: '140px',
        }}
        br="0.5rem 0.5rem 0 0"
      />
      <Box p="0.5rem 1rem">
        <Text maxLine={2} size="xs" weight="500">
          {name}
        </Text>
        {customBottomTags && (
          <Row gap="4px" mt="4px">
            {customBottomTags}
          </Row>
        )}

        <Row>
          {priceDiscount && (
            <Row gap="0.5rem" mt="0.1rem">
              <Text color="textTitle" size="md" display="block" weight="600">
                {priceDiscount}
              </Text>
              <Text
                color="textLight"
                size="xs"
                display="block"
                weight="600"
                sx={{
                  textDecoration: 'line-through',
                }}
              >
                {price}
              </Text>
            </Row>
          )}

          {!priceDiscount && (
            <Text
              mt="0.1rem"
              color="textTitle"
              size="md"
              display="block"
              weight="600"
            >
              {price}
            </Text>
          )}

          {!!sold && (
            <Text color="textLight" size="xs" display="block" ml="auto">
              {sold} Sold
            </Text>
          )}
        </Row>
      </Box>
    </Box>
  );
}
