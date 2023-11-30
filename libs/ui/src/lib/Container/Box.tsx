import { bearCss, classes } from '@bearon/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const boxClass = (props: Props) => bearCss`
`;

export default function Box({ children, className, ...props }: Props) {
  return (
    <div className={classes(boxClass({}), 'bear-box', className)} {...props}>
      {children}
    </div>
  );
}
