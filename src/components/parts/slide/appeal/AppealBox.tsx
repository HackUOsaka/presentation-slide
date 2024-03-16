'use client';

import { IconType } from 'react-icons';
import styles from './appeal.module.scss';
import { DescriptionText, SectionTitle } from '../../theme/texts';

export const AppealPointsBox = ({
  title, Icon, description,
}: {
  title: string, Icon: IconType, description: string,
}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['icon-box']}>
        <Icon />
      </div>
      <SectionTitle text={title} />
      {description.split('\n').map((item, key) => {
          return (
            <p className={styles['description']} key={key}>{item}</p>
          )
      })}
    </div>
  )
}
