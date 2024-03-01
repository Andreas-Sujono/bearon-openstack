import React from 'react';
import { Image } from '../../Image';
import { Column, Row } from '../../Layout';
import { Text } from '../../Text';
import { CommonStyleProps, parseProps } from '../../utils';

interface StatsCard1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<CommonStyleProps, 'color'> {
  icon?: React.ReactElement;
  iconImg?: string;
  iconSize?: string;
  label?: string;
  number?: string;
  over?: string;
  maxWidth?: string;
}

export function StatsCard1({
  icon,
  iconImg,
  iconSize = '50px',
  label,
  number,
  over,
  maxWidth = '240px',
  ...props
}: StatsCard1Props) {
  return (
    <Column
      sx={{ minWidth: '260px', maxWidth, boxShadow: 'var(--boxShadowMd)' }}
      background="backgroundLight"
      br="1rem"
      p="1rem"
      justifyContent="center"
      {...parseProps(props)}
    >
      {icon || (
        <Image
          srcs={[iconImg || '']}
          sx={{
            width: iconSize,
            height: iconSize,
            objectFit: 'cover',
          }}
          sxSm={{
            maxHeight: '140px',
          }}
          br="50%"
        />
      )}

      <Row gap="6px">
        <Text
          size="h5"
          weight="700"
          maxWidth="max-content"
          mt="0.5rem"
          color="textTitle"
        >
          {number}
        </Text>
        {over && (
          <Text
            size="md"
            weight="400"
            maxWidth="max-content"
            mt="1rem"
            color="textLight"
          >
            /&nbsp;{over}
          </Text>
        )}
      </Row>

      <Text mt="0.5rem" color="textBody" size="xs" display="block">
        {label}
      </Text>
    </Column>
  );
}
