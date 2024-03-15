import styles from './slide.module.scss';
import { MainSlideTemplate } from "../templates/MainSlideTemplate"
import { VoiceWaveAnimation } from '../parts/animation/VoiceWaveAnimation';

export const VoiceWaveSlide = () => {
  return (
    <MainSlideTemplate>
      <div className={styles['voice-wave-container']}>
        <div className={styles['voice-wave-box']}>
          <VoiceWaveAnimation />
        </div>
      </div>
    </MainSlideTemplate>
  )
}
