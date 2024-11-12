import styles from './BlogSingle.module.css'
import U_header from '@/app/components/U_header';
import SinglePagination from '@/app/components/SinglePagination';
import { client } from '@/libs/client'
import parse from 'html-react-parser';


export default async function BlogSingle({ params }) {
  // 現在の投稿データを取得
  const post = await client.get({
    endpoint: 'blog',
    contentId: params.id,
  });

  // 前後の記事のデータを取得
  const currentPostDate = post.createdAt; // 現在の記事の投稿日

  const [prevResponse, nextResponse] = await Promise.all([
    //前の記事を取得
    client.get({
      endpoint: 'blog',
      queries: {
        filters: `createdAt[less_than]${currentPostDate}`,
        limit: 1,
        orders: '-createdAt',
      },
    }),
    //後の記事を取得
    client.get({
      endpoint: 'blog',
      queries: {
        filters: `createdAt[greater_than]${currentPostDate}`,
        limit: 1,
        orders: 'createdAt',
      },
    }),
  ]);
  const prevPost = prevResponse.contents.length > 0 ? prevResponse.contents[0] : null;
  const nextPost = nextResponse.contents.length > 0 ? nextResponse.contents[0] : null;

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
              <SinglePagination prevPost={prevPost} nextPost={nextPost} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
