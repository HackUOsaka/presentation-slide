'use client';

import styles from './slide.module.scss';
import { TitleTemplate } from "../templates/TitleSlideTemplate";
import { prospects } from '@/const/prospects';
import ProspectBox from '../parts/slide/prospect/ProspectBox';
import { IconBaseProps } from 'react-icons';

export const ProspectSlide = () => {
  return (
    <TitleTemplate title='今後の展望' isLogo>
      <div className={styles['prospect-container']}>
        {prospects.map((item, key) => (
          <ProspectBox Icon={item.Icon} title={item.title} description={item.description} index={key} key={key} />
        ))}
      </div>
    </TitleTemplate>
  )
}

