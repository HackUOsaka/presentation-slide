'use client';

import styles from './slide.module.scss';
import { TopTitle } from "../parts/theme/texts";
import { MainSlideTemplate } from "../templates/MainSlideTemplate";
import logoImage from '@/public/logo.png';
import Image from 'next/image';

export const UlupoliSlide = () => {
  return (
    <MainSlideTemplate>
      <div className={styles['ulupoli-container']}>
        <div className={styles['ulupoli-title-container']}>
          <Image src={logoImage} alt='logo' width={500} className={styles['ulupoli-logo-img']} />
          <TopTitle text='ulupoli' />
        </div>
      </div>
    </MainSlideTemplate>
  )
}
