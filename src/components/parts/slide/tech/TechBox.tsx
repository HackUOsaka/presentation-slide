'use client';

import Image from 'next/image';
import styles from './tech.module.scss';

export const TechBox = ({
  title, img,
}: {
  title: string, img: any,
}) => {
  return (
    <div className={styles['container']}>
      <Image src={img} alt={title} width={130} className={styles['img']} />
      {title}
    </div>
  );
}
