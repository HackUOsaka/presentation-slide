import styles from './templates.module.scss';
import { MainSlideTemplate } from "./MainSlideTemplate"
import { SlideTitle } from '../parts/theme/texts';
import Image from 'next/image';
import logoImage from '@/public/logo.png';

export const TitleTemplate = ({
  children, title, isLogo,
}: {
  children: React.ReactNode, title: string, isLogo?: boolean,
}) => {
  return (
    <MainSlideTemplate>
      {isLogo && <Image src={logoImage} alt='logo' width={80} className={styles['title-logo-img']} />}
      <div className={styles['title-container']}>
        <div className={styles['title-box']}>
          <SlideTitle text={title} />
          <div className={styles['title-separate']} />
        </div>
        {children}
      </div>
    </MainSlideTemplate>
  )
}
