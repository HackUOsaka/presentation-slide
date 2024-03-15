'use client';

import Lottie from "lottie-react";
import styles from './animation.module.scss';
import voiceWave from '@/public/animation/voiceWave.json';

export const VoiceWaveAnimation = () => {
  return (
    <div className={styles['container']}>
      <Lottie
        animationData={voiceWave}
        loop={true}
        autoplay={true}
      />
    </div>
  )
}
