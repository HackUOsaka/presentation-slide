'use client';

import styles from './slide.module.scss';
import { TitleTemplate } from "../templates/TitleSlideTemplate";
import { FunctionBox } from '../parts/slide/functions/FunctionBox';
import { IconBaseProps } from 'react-icons';
import { MdOutlineGpsFixed } from 'react-icons/md';
import { SiMonogame } from 'react-icons/si';

export const FunctionsSlide = () => {
  return (
    <TitleTemplate title="機能" isLogo>
      <div className={styles['functions-container']}>
        <FunctionBox
          title='GPS機能'
          Icon={MdOutlineGpsFixed}
          description='一定時間ごとにプレイヤーの位置情報が表示'
        />
        <FunctionBox
          title='ミッション機能'
          Icon={SiMonogame}
          description='ランダムなタイミングで発生するイベントをクリアし、味方を解放'
        />
      </div>
    </TitleTemplate>
  )
}
