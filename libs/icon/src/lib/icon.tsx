import styles from './icon.module.scss';

/* eslint-disable-next-line */
export interface IconProps {}

export function Icon(props: IconProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Icon!</h1>
    </div>
  );
}

export default Icon;
