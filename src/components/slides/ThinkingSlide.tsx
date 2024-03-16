'use client';

import styles from './slide.module.scss';
import { NFCAnimation } from "../parts/animation/NFCAnimation";
import { TitleTemplate } from "../templates/TitleSlideTemplate";
import { DescriptionText, SectionTopTitle } from '../parts/theme/texts';

export const ThinkingSlide = () => {
  return (
    <TitleTemplate title="工夫した点" isLogo>
      <div className={styles['thinking-container']}>
        <div className={styles['thinking-content']}>
          <SectionTopTitle text='NFCタグの導入' />
          <div className={styles['thinking-index']}>
            <DescriptionText text='・捕まえる処理' />
            <DescriptionText text='・ユーザーログイン' />
            <DescriptionText text='・ミッション' />
          </div>
        </div>
        <div className={styles['thinking-animation-container']}>
          <NFCAnimation />
        </div>
      </div>
    </TitleTemplate>
  )
}
