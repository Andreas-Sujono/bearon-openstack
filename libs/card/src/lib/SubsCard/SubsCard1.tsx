import React from 'react';
import { Column } from '../../Layout';
import { Text } from '../../Text';
import { CommonStyleProps, parseProps } from '../../utils';
import { Button } from '../../Button';
import { Divider } from '../../Divider';
import { Badge } from '../../Badge';
import { BookmarkIcon } from '../../Icon';

interface SubsCard1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<CommonStyleProps, 'color'> {
  priceLabel?: string;
  planName?: string;
  benefits?: { label: string; supported?: boolean }[];
  maxWidth?: string;
  ctaText?: string;
  onClickCta?: () => void;
  withPopularTag?: boolean;
  topTagLabel?: string;
}

export function SubsCard1({
  priceLabel,
  planName,
  benefits,
  ctaText,
  onClickCta,
  maxWidth = '240px',
  withPopularTag,
  topTagLabel,
  ...props
}: SubsCard1Props) {
  return (
    <Column
      sx={{
        minWidth: '260px',
        maxWidth,
        boxShadow: 'var(--boxShadowMd)',
        height: '100%',
        alignSelf: 'stretch',
        position: 'relative',
      }}
      background="backgroundLight"
      br="1rem"
      p="2rem 1rem"
      justifyContent="flex-start"
      alignItems="center"
      {...parseProps(props)}
    >
      {topTagLabel && (
        <Badge
          background="secondary"
          color="secondary"
          backgroundOpacity={0.1}
          sx={{
            position: 'absolute',
            top: '0',
            left: '',
            width: '100%',
          }}
          br="0.5rem 0.5rem 0 0"
          p="4px"
        >
          <Text>{topTagLabel}</Text>
        </Badge>
      )}
      {withPopularTag && (
        <BookmarkIcon
          sx={{
            position: 'absolute',
            right: '1rem',
            top: '-0.5rem',
          }}
          size="42px"
          color="secondary"
        />
      )}
      <Text
        size="md"
        maxWidth="max-content"
        mt="0.5rem"
        color="textBody"
        align="center"
        weight="600"
      >
        {planName}
      </Text>
      <Divider
        lineHeight="4px"
        lineWidth="20%"
        mt="0.5rem"
        background="primary"
        backgroundOpacity={0.5}
      />
      <Text
        size="h4"
        weight="700"
        maxWidth="max-content"
        mt="1rem"
        color="textTitle"
      >
        {priceLabel}
      </Text>

      <ul
        style={{
          listStyleType: '"✔"',
        }}
      >
        {benefits?.map((item) => (
          <li
            style={{
              marginLeft: '-1rem',
              marginTop: '0.5rem',
              paddingLeft: '0.5rem',
            }}
          >
            <Text size="sm">{item.label}</Text>
          </li>
        ))}
      </ul>

      <Button onClick={onClickCta} mt="auto">
        {ctaText}
      </Button>
    </Column>
  );
}
