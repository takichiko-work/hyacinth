import styles from './U_header.module.css';

export default function U_header({ slug, pagettl_jp }) {
  return (
    <div className={styles.page_ttl_wrap}>
      <hgroup className={styles.page_ttl}>
        <p className={styles.en}>{slug}</p>
        <h1 className={styles.jp}>{pagettl_jp}</h1>
      </hgroup>
    </div>
  );
}
