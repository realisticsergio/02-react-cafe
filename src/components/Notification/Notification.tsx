import styles from './Notification.module.css';

export default function Notification() {
  return (
    <div className={styles.container}>
      <p className={styles.message}>No feedback yet</p>
    </div>
  );
}