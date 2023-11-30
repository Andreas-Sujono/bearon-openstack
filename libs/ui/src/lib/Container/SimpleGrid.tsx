import { bearCss, classes } from '@bearon/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  templateColumns?: string;
  templateRows?: string;
  justifyContent?: string;
  alignitems?: string;
  spacing?: string;
  children?: React.ReactNode;
}

const simpleGridClass = (props: Props) => bearCss`
    display: grid;
    grid-gap: ${String(
      props.spacing?.startsWith('space')
        ? `var(--${props.spacing})`
        : props.spacing || 0
    )};
    grid-template-columns: ${props.templateColumns || 'auto'};
    grid-template-rows: ${props.templateRows || 'auto'};
    justify-content: ${props.justifyContent || 'initial'};
    align-items: ${props.alignitems || 'initial'};
`;

export default function SimpleGrid({
  children,
  className,
  templateColumns,
  templateRows,
  justifyContent,
  alignitems,
  spacing,
  ...props
}: Props) {
  return (
    <div
      className={classes(
        'bear-simple-grid',
        simpleGridClass({
          templateColumns,
          templateRows,
          justifyContent,
          alignitems,
          spacing,
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
