'use client';

import Lottie from "lottie-react";
import styles from './animation.module.scss';
import nfc from '@/public/animation/nfc.json';

export const NFCAnimation = () => {
  return (
    <div className={styles['container']}>
      <Lottie
        animationData={nfc}
        loop={true}
        autoplay={true}
      />
    </div>
  )
}
