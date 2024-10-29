"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';

export default function Header() {
  // メニューの開閉状態を管理するstate
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニューを開閉する関数
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 固定クラスを管理するstate
  const [isFixed, setIsFixed] = useState(false);

  // スクロールイベントを監視するuseEffect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) { // 1px以上スクロールした場合にis-fixedを追加
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // クリーンアップ
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isFixed ? styles.is_fixed : ''}`}>
      <div className={styles.header_layout}>
        <h1 className={styles.h_logo}>
          <Link href="/" legacyBehavior>
            <a className={styles.fade}>
              <Image
                src="/images/share/logo@2x.png"
                alt="愛知県名古屋市の歯医者なら、「カワグチ歯科クリニック」にお任せください。"
                width={355}
                height={75}
              />
            </a></Link>
        </h1>
        <div className={styles.h_utility}>
          <div className={styles.h_contact}>
            <p className={styles.tel_txt}>予約優先制</p>
            <a href="tel:0528795445" className={styles.tel}>
              <Image
                src="/images/share/icon_tel.svg"
                alt=""
                width={24}
                height={24}
              />052-879-5445
            </a>
          </div>
          <button
            className={`${styles.menu_btn} ${isMenuOpen ? styles.open : ''}`}
            onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`${styles.menu_contents} ${isMenuOpen ? styles.open : ''}`}>
            <div className={styles.navi_cont}>
              <figure className={styles.navi_logo}>
                <Link href="/" legacyBehavior>
                  <a className={styles.fade}>
                    <Image
                      src="/images/share/logo@2x.png"
                      alt="カワグチ歯科クリニック"
                      width={355}
                      height={75}
                    />
                  </a></Link>
              </figure>
              <dl className={styles.dl_time}>
                <dt>
                  <span>診療時間</span>
                </dt>
                <dd>
                  9:30～12:00 / 14:00～19:00
                  <br />
                  <span className={styles.small}>※土曜は18時までの診療となります</span>
                </dd>
                <dt>
                  <span>休診日</span>
                </dt>
                <dd>木曜・日曜・祝日</dd>
              </dl>
              <ul className={styles.navi_link_wrap}>
                <li>
                  <ul className={styles.navi_link}>
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
                </li>
                <li>
                  <ul className={styles.navi_link}>
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
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <figure className={styles.navi_img}>
                <Image
                  src="/images/share/navi_img01@2x.jpg"
                  alt=""
                  width={560}
                  height={700}
                />
              </figure>
            </div>
            <div id="focus-trap" tabIndex="0"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
