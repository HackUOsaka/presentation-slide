import styles from './texts.module.scss';

export const TopTitle = ({ text } : { text: string }) => {
  return (
    <p className={styles['top-title']}>
      {text}
    </p>
  )
}

export const SectionTitle = ({ text } : { text: string }) => {
  return (
    <p className={styles['section-title']}>
      {text}
    </p>
  )
}

export const SectionTopTitle = ({ text } : { text: string }) => {
  return (
    <p className={styles['section-top-title']}>
      {text}
    </p>
  )
}

export const SlideTitle = ({ text } : { text: string }) => {
  return (
    <p className={styles['slide-title']}>
      {text}
    </p>
  )
}

export const DescriptionText = ({ text } : { text: string }) => {
  return (
    <p className={styles['description']}>
      {text}
    </p>
  )
}
