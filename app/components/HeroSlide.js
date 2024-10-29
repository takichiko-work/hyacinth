"use client";

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styles from './HeroSlide.module.css';

export default function HeroSlide() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_catch}>
        <p className={styles.en}>Teeth are<br />life partners</p>
        <p className={styles.ttl}><em>歯は人生のパートナー</em><br />
          育み方、守り方までアドバイスします</p>
      </div>
      <Splide
        options={{
          type: 'fade',
          rewind: true,
          autoplay: true,
          arrows: false,
          interval: 5000,
          speed: 2000,
        }}
        aria-label="メインビジュアル"
        hasTrack={false}
        className={styles.hero_slider}
      >
        <SplideTrack className={styles.splide_track}>
          <SplideSlide>
            <img className={styles.hero_img} src="/images/hero01_pc@2x.jpg" alt="" width="1412" height="712" />
          </SplideSlide>
          <SplideSlide>
            <img className={styles.hero_img} src="/images/hero02_pc@2x.jpg" alt="" width="1412" height="712" />
          </SplideSlide>
          <SplideSlide>
            <img className={styles.hero_img} src="/images/hero03_pc@2x.jpg" alt="" width="1412" height="712" />
          </SplideSlide>
        </SplideTrack>
        <div className={styles.splide__controls}>
          <button className="splide__toggle" type="button">
            <svg className="splide__toggle__play" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m22 12-20 11v-22l10 5.5z" />
            </svg>
            <svg className="splide__toggle__pause" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m2 1v22h7v-22zm13 0v22h7v-22z" />
            </svg>
          </button>
          <ul className={styles.splide__pagination}></ul>
        </div>
      </Splide>
    </div>
  );
}
