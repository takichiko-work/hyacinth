import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import styles from './page.module.css'
import { client } from '@/libs/client'
import HeroSlide from './components/HeroSlide';

export default async function Home() {

  return (
    <main>
      <HeroSlide />
      <div className={styles.contents}>
        <section className={styles.sec02}>
          <div className="container">
            <hgroup className={styles.sec02_ttl}>
              <p className={styles.en}>Concept</p>
              <h2 className={styles.jp}>
                家族にしたい治療を<br className="sp_only" />「すべての患者さま」に
              </h2>
            </hgroup>
            <p className="tac sp-tal">
              名古屋市緑区の桜通線：徳重駅から徒歩7分に位置する「カワグチ歯科クリニック」では、
              <br className="pc_only" />
              「すべての方に誠実な治療を施し、地域貢献をする」ことを目的に治療を行っています。
              <br />
              また、患者さま一人ひとりと向き合い、むし歯や歯周病を未然に防ぎ、
              <br className="pc_only" />
              歯を削ったり再治療することのない「健康なお口」を保つ予防歯科にも力を注いでいます。
            </p>
            <div className={styles.l_btn}>
              <Link href="/first" legacyBehavior><a className="btn_more">初めての方へ</a></Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
