import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import Timetable from './Timetable';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.f_layout}>
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.f_logo}>
              <Link href="/" legacyBehavior>
                <a className={styles.fade}>
                  <Image
                    src="/images/share/logo_w@2x.png"
                    alt="カワグチ歯科クリニック"
                    width={355}
                    height={75}
                  />
                </a></Link>
            </div>
            <p>
              <a href="tel:0528795445" className={styles.tel}>
                <Image
                  src="/images/share/icon_tel_w.svg"
                  alt=""
                  width={24}
                  height={24}
                />052-879-5445
              </a>
            </p>
            <p className={styles.f_adress}>
              〒458-0815　愛知県名古屋市緑区徳重1-210
            </p>
            <Timetable />
            <dl className={styles.dl_time}>
              <dt>
                <span>休診日</span>
              </dt>
              <dd>木曜・日曜・祝日</dd>
            </dl>
            <p>土曜日18:00までの診療となります</p>
          </div>
          <div className={styles.item}>
            <div className={styles.site_map}>
              <ul className={styles.f_links}>
                <li>
                  <Link href="/">ホーム</Link>
                </li>
                <li>
                  <Link href="/first">初めての方へ</Link>
                </li>
                <li>
                  <Link href="/doctor">歯科医師紹介</Link>
                </li>
                <li>
                  <Link href="/faq">よくある質問</Link>
                </li>
                <li>
                  <Link href="/clinic">医院案内・アクセス</Link>
                </li>
                <li>
                  <Link href="/recruit">採用情報</Link>
                </li>
                <li>
                  <Link href="/blog">ブログ</Link>
                </li>
                <li>
                  <Link href="/news">お知らせ</Link>
                </li>
                <li>
                  <Link href="/policy">プライバシーポリシー</Link>
                </li>
              </ul>
              <ul className={styles.f_links}>
                <li className={styles.link_ttl}>診療案内</li>
                <li>
                  <Link href="/cavities">むし歯治療</Link>
                </li>
                <li>
                  <Link href="/periodontal">歯周病治療</Link>
                </li>
                <li>
                  <Link href="/pediatric">小児歯科</Link>
                </li>
                <li>
                  <Link href="/maternity">マタニティ歯科</Link>
                </li>
                <li>
                  <Link href="/aesthetic">審美歯科・ホワイトニング</Link>
                </li>
                <li>
                  <Link href="/surgery">口腔外科</Link>
                </li>
                <li>
                  <Link href="/denture">入れ歯治療</Link>
                </li>
                <li>
                  <Link href="/implant">インプラント治療</Link>
                </li>
                <li>
                  <Link href="/prevention">予防歯科</Link>
                </li>
                <li>
                  <Link href="/medical-examination">各種検診</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <small>&copy; 2024 カワグチ歯科クリニック.</small>
      </div>
    </footer>
  );
}
