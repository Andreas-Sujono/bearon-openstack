import styles from './tailwind.module.scss';

/* eslint-disable-next-line */
export interface TailwindProps {}

export function Tailwind(props: TailwindProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Tailwind!</h1>
    </div>
  );
}

export default Tailwind;
