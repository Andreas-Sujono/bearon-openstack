export type TextVariant =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'h5'
  | 'h4'
  | 'h3'
  | 'h2'
  | 'h1';

export type FontWeight =
  | 'auto'
  | 'regular'
  | 'medium'
  | 'bold'
  | (string & Record<never, never>);
