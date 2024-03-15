'use client';

import styles from './slide.module.scss';
import { TopTitle } from "../parts/theme/texts";
import { MainSlideTemplate } from "../templates/MainSlideTemplate";
import logoImage from '@/public/logo.png';
import Image from 'next/image';

export const EndSlide = () => {
  return (
    <MainSlideTemplate>
      <div className={styles['end-container']}>
        <TopTitle text='END' />
        <Image src={logoImage} alt='logo' width={200} className={styles['end-logo-img']} />
      </div>
    </MainSlideTemplate>
  )
}

