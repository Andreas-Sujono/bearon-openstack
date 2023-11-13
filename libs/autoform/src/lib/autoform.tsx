import styles from './autoform.module.scss';

/* eslint-disable-next-line */
export interface AutoformProps {}

export function Autoform(props: AutoformProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Autoform!</h1>
    </div>
  );
}

export default Autoform;
