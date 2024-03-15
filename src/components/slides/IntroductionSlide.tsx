'use client';

import styles from './slide.module.scss';
import { TitleTemplate } from "../templates/TitleSlideTemplate";
import { PiArrowFatLinesDownFill } from 'react-icons/pi';
import { TopTitle } from '../parts/theme/texts';

export const IntroductionSlide = () => {
  return (
    <TitleTemplate title="PURPOSE">
      <div className={styles['introduction-container']}>
        <div className={styles['introduction-reason-container']}>
          <p className={styles['introduction-reason-text']}>
            小学生の頃の
            <span>ロマン</span>
            を形に
          </p>
        </div>
        <PiArrowFatLinesDownFill className={styles['introduction-arrow']} />
        <TopTitle text='近未来型鬼ごっこアプリ' />
      </div>
    </TitleTemplate>
  )
}
