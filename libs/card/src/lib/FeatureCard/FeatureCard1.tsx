import React from 'react';
import { Image } from '../../Image';
import { Column } from '../../Layout';
import { Text } from '../../Text';
import { CommonStyleProps, parseProps } from '../../utils';

interface FeatureCard1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<CommonStyleProps, 'color'> {
  icon?: React.ReactElement;
  iconImg?: string;
  iconSize?: string;
  leftAlign?: boolean;
  title?: string;
  desc?: string;
  maxWidth?: string;
}

export function FeatureCard1({
  icon,
  iconImg,
  iconSize = '100px',
  leftAlign = false,
  title,
  desc,
  maxWidth = '240px',
  ...props
}: FeatureCard1Props) {
  return (
    <Column
      sx={{ maxWidth, boxShadow: 'var(--boxShadowMd)' }}
      background="backgroundLight"
      br="1rem"
      p="2rem 1.5rem"
      justifyContent="center"
      alignItems={leftAlign ? 'flex-start' : 'center'}
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

      <Text
        size="md"
        weight="700"
        display="block"
        maxWidth="max-content"
        mt="1rem"
      >
        {title}
      </Text>

      <Text
        mt="0.5rem"
        color="textBody"
        size="xs"
        display="block"
        align={leftAlign ? 'start' : 'center'}
      >
        {desc}
      </Text>
    </Column>
  );
}
