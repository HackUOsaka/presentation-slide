'use client';

import styles from './slide.module.scss';
import { TitleTemplate } from "../templates/TitleSlideTemplate";
import { appealPoints } from '@/const/appealPoints';
import { AppealPointsBox } from '../parts/slide/appeal/AppealBox';
import { useEffect, useState } from 'react';
import { PiArrowFatLinesDownFill } from 'react-icons/pi';
import { AnimatePresence, motion } from 'framer-motion';

export const AppealPointsSlide = () => {
  const [isEntered, setIsEntered] = useState(false);

  const handleKeyDown = (e: { code: any; }) => {
    const key = e.code;
    if (key === 'Enter') {
      if (!isEntered) {
        setIsEntered(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <TitleTemplate title='ulupoliの魅力' isLogo>
      <div className={styles['appeal-container']}>
        <div className={styles['appeal-index']}>
          {appealPoints.map((item, key) => (
            <AppealPointsBox title={item.title} Icon={item.Icon} description={item.description} key={key} />
          ))}
        </div>
        <AnimatePresence>
        {isEntered && (
          <motion.div
            className={styles['appeal-arrow']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <PiArrowFatLinesDownFill />
          </motion.div>
        )}
        {isEntered && (
          <motion.p
            className={styles['appeal-point-text']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            ゲーム性の向上で、より楽しく！！
          </motion.p>
        )}
        </AnimatePresence>
      </div>
    </TitleTemplate>
  )
}

