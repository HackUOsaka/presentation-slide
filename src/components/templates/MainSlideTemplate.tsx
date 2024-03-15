import slideTemplateImage from '@/public/slide-bg.png';
import styles from './templates.module.scss';
import Image from 'next/image';

export const MainSlideTemplate = ({
  children,
}: {
  children: React.ReactNode,
}) => {

  return (
    <div className={styles['container']}>
      <Image src={slideTemplateImage} alt='slide bg' width={1600} className={styles['bg-img']} />
      <div className={styles['main-content']}>
        {children}
      </div>
    </div>
  )
}
