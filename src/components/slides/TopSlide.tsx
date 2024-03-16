'use client';

import styles from './slide.module.scss';
import { MainSlideTemplate } from "../templates/MainSlideTemplate"
import { SectionTitle, TopTitle } from '../parts/theme/texts';
import logoImage from '@/public/logo.png';
import Image from 'next/image';
import { LightningAnimation } from '../parts/animation/LightningAnimation';

export const TopSlide = () => {
  return (
    <MainSlideTemplate>
      <div className={styles['top-container']}>
        <Image src={logoImage} alt='logo' width={800} className={styles['top-logo-img']} />
        <div className={styles['top-title-box']}>
          <TopTitle text='ulupoli' />
          <SectionTitle text='限界スペース ~助けてください~' />
        </div>
        <div className={styles['top-animation']}>
          <LightningAnimation />
        </div>
      </div>
    </MainSlideTemplate>
  )
}
