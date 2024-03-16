'use client';

import { DescriptionText } from '../../theme/texts';
import styles from './function.module.scss';
import { IconType } from "react-icons";

export const FunctionBox = ({
  title, Icon, description,
}: {
  title: string, Icon: IconType, description: string,
}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['top-box']}>
        <div className={styles['top-icon-box']}>
          <Icon />
        </div>
        {title}
      </div>
      <DescriptionText text={description} />
    </div>
  )
}
