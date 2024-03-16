'use client';

import styles from './slide.module.scss';
import { DescriptionText, SectionTopTitle } from "../parts/theme/texts";
import { TitleTemplate } from "../templates/TitleSlideTemplate";
import Image from 'next/image';
import hardImage from '@/public/hard.png';

export const ThinkingDeviceSlide = () => {
  return (
    <TitleTemplate title="工夫した点">
      <div
        className={styles['thinking-container']}
        style={{ paddingTop: '6%', justifyContent: 'space-around' }}
      >
        <div className={styles['hard-img-box']}>
          <Image src={hardImage} alt='hard' width={500} className={styles['hard-img']} />
        </div>
        <div className={styles['thinking-content']}>
          <SectionTopTitle text='通知デバイスの作成' />
          <div className={styles['thinking-index']}>
            <DescriptionText text='・バイブレーションですぐに伝える' />
            <DescriptionText text='・通知オフでも気付ける' />
            <DescriptionText text='・やっぱりデバイスはロマン' />
          </div>
        </div>
      </div>
    </TitleTemplate>
  )
}

