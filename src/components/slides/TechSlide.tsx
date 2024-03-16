'use client';

import styles from './slide.module.scss';
import techStyles from '@/components/parts/slide/tech/tech.module.scss';
import { TitleTemplate } from "../templates/TitleSlideTemplate";
import { TechBox } from '../parts/slide/tech/TechBox';
import nextImg from '@/public/tech/next.png';
import firebaseImg from '@/public/tech/firebase.png';
import razupaiImg from '@/public/tech/razupai.png';
import { SiSwift } from 'react-icons/si';

export const TechSlide = () => {
  return (
    <TitleTemplate title='技術構成' isLogo>
      <div className={styles['tech-container']}>
        {/* <TechBox title='フロントエンド' /> */}
        <div className={techStyles['container']}>
          <div className={techStyles['icon']}>
            <SiSwift />
          </div>
          フロントエンド
        </div>
        <TechBox title='バックエンド' img={firebaseImg} />
        <TechBox title='ハード' img={razupaiImg} />
        <TechBox title='スライド' img={nextImg} />
      </div>
    </TitleTemplate>
  )
}
