import styles from './BlogSingle.module.css'
import U_header from '@/app/components/U_header';
import Pagination from '@/app/components/Pagination';
import { client } from '@/libs/client'
import parse from 'html-react-parser';


export default async function BlogSingle({ params }) {
  // 現在の投稿データを取得
  const post = await client.get({
    endpoint: 'blog',
    contentId: params.id,
  });

  // 日付を整形
  const date = new Date(post.createdAt);
  const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}.${date
      .getDate()
      .toString()
      .padStart(2, '0')}`;

  const pagettl = { slug: "Blog", pagettl_jp: "ブログ" };

  return (
    <main>
      <U_header slug={pagettl.slug} pagettl_jp={pagettl.pagettl_jp} />
      <div className="u_contents">
        <section className="tall">
          <div className="container">
            <div className={styles.l_post_single}>
              <div className={styles.post_data}>
                <time dateTime={post.createdAt}>{formattedDate}</time><span className={styles.category}>お知らせ</span>
              </div>
              <h1 className={styles.l_ttl}>{post.title}</h1>
              <div className={styles.postdata}>
                {parse(post.content)}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
