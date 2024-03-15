import styles from './templates.module.scss';
import { MainSlideTemplate } from "./MainSlideTemplate"
import { SlideTitle } from '../parts/theme/texts';

export const TitleTemplate = ({
  children, title,
}: {
  children: React.ReactNode, title: string,
}) => {
  return (
    <MainSlideTemplate>
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
