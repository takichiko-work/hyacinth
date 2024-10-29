import styles from './Blog.module.css'
import U_header from '@/app/components/U_header';
import { client } from '@/libs/client'
import Image from 'next/image';
import Link from 'next/link';

export default async function Blog() {
  const data = await client.get({
    endpoint: 'blog',
  })

  const pagettl = { slug: "Blog", pagettl_jp: "ブログ" };

  return (
    <main>
      <U_header slug={pagettl.slug} pagettl_jp={pagettl.pagettl_jp} />
      <div className="u_contents">
        <section className="tall">
          <div className="container">
            <h2 className="u_h2">すべての記事</h2>
            <ul className={styles.list_post_type01}>
              {data.contents?.map((post, index) => {
                // 日付を整形
                const date = new Date(post.createdAt);
                const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
                  .toString()
                  .padStart(2, '0')}.${date
                    .getDate()
                    .toString()
                    .padStart(2, '0')}`;

                return (
                  <li key={index}>
                    <Link href={`/blog/${post.id}`}>
                      <figure className={styles.list_img}>
                        {post.eyecatch?.url ? (
                          <Image
                            src={post.eyecatch.url}
                            alt={post.eyecatch.alt || ''}
                            width={800}
                            height={590}
                            className={styles.list_img}
                          />
                        ) : (
                          <Image
                            src="/images/now_printing.jpg"
                            alt="Now Printing"
                            width={800}
                            height={590}
                            className={styles.list_img}
                          />
                        )}
                      </figure>
                      <div className={styles.list_desc}>
                        <time dateTime={post.createdAt}>{formattedDate}</time>
                        <h3 className={styles.list_ttl}>{post.title}</h3>
                        {post.category?.name && (
                          <span className={styles.category}>{post.category.name}</span>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
