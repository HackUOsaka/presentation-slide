import styles from './animation.module.scss';
import Lottie from 'lottie-react';
import lightning from '@/public/animation/lightning.json';

export const LightningAnimation = () => {
  return (
    <div className={styles['container']}>
      <Lottie
        animationData={lightning}
        loop={true}
        autoplay={true}
      />
    </div>
  )
}
