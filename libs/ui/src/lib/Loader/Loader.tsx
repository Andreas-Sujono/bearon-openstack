import * as svgSources from './svg';

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  type?: 'spinner' | 'bars' | 'bubbles' | 'spokes' | 'cyclon';
  size?: string;
}

//based on https://github.com/fakiolinho/react-loading
export default function Loader({
  color,
  type = 'spinner',
  size = '64px',
  ...rest
}: LoaderProps) {
  const svg = svgSources[type];
  const style = {
    fill: color,
    height: Number(size) || size,
    width: Number(size) || size,
  };

  return (
    <div style={style} dangerouslySetInnerHTML={{ __html: svg }} {...rest} />
  );
}
