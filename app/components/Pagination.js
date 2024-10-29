import Link from 'next/link';
import styles from './Pagination.module.css';

export default function Pagination({ currentSlug, prevSlug, nextSlug, basePath = '' }) {
  return (
    <nav className={styles.post_number_single}>
      {prevSlug && (
        <Link href={`/${basePath}/${prevSlug}`} className={styles.prev}></Link>
      )}
      <Link href={`/${basePath}`} className={styles.all}>
        ALL
      </Link>
      {nextSlug && (
        <Link href={`/${basePath}/${nextSlug}`} className={styles.next}></Link>
      )}
    </nav>
  );
}
