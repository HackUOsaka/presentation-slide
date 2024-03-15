import { Slide } from '@/components/templates/Slide';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles['container']}>
      <Slide />
    </div>
  );
}
