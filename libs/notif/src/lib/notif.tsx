import styles from './notif.module.scss';

/* eslint-disable-next-line */
export interface NotifProps {}

export function Notif(props: NotifProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Notif!</h1>
    </div>
  );
}

export default Notif;
