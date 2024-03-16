import styles from './prospect.module.scss';
import { IconType } from 'react-icons';

export default function ProspectBox({
  Icon, title, description, index,
}: {
  Icon: IconType, title: string, description: string, index: number,
}) {
  return (
    <div className={styles['concept-box']}>
      <div
        className={styles['concept-box-icon']}
        style={{ color: index === 3 ? 'var(--color-main)' : '' }}
      >
        <Icon />
      </div>
      <p
        className={styles['concept-box-title']}
        style={{ color: index === 3 ? 'var(--color-main)' : '' }}
      >
        {title}
      </p>
      <p className={styles['concept-box-text']}>
        {description}
      </p>
    </div>
  );
}

