import styles from './Timetable.module.css';

export default function Timetable() {
  return (
    <div className={styles.time_table}>
      <div className={styles.time_table_head}>
        <div className={styles.item}>診療時間</div>
        <div className={styles.item}>月</div>
        <div className={styles.item}>火</div>
        <div className={styles.item}>水</div>
        <div className={styles.item}>木</div>
        <div className={styles.item}>金</div>
        <div className={styles.item}>土</div>
        <div className={styles.item}>日/祝</div>
      </div>
      <div className={styles.time_table_body}>
        <div className={styles.item}>9:30～12:00</div>
        <div className={styles.item}>●</div>
        <div className={styles.item}>●</div>
        <div className={styles.item}>●</div>
        <div className={styles.item}>／</div>
        <div className={styles.item}>●</div>
        <div className={styles.item}>●</div>
        <div className={styles.item}>／</div>
      </div>
      <div className={styles.time_table_body}>
        <div className={styles.item}>14:00～19:00</div>
        <div className={styles.item}>●</div>
        <div className={styles.item}>●</div>
        <div className={styles.item}>●</div>
        <div className={styles.item}>／</div>
        <div className={styles.item}>●</div>
        <div className={styles.item}>▲</div>
        <div className={styles.item}>／</div>
      </div>
    </div>
  );
}
