'use client';

import Link from 'next/link';
import styles from './SinglePagination.module.css';

const SinglePagination = ({ prevPost, nextPost }) => {
  return (
    <div className={styles.post_number_single}>
      {prevPost && (
        <Link href={`/blog/${prevPost.id}`} legacyBehavior>
          <a className={styles.prev}></a>
        </Link>
      )}

      <Link href="/blog" legacyBehavior>
        <a className={styles.all}>ALL</a>
      </Link>

      {nextPost && (
        <Link href={`/blog/${nextPost.id}`} legacyBehavior>
          <a className={styles.next}></a>
        </Link>
      )}
    </div>
  );
};

export default SinglePagination;
