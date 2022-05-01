import styles from './PageLayout.module.css';

export default function PageLayout({ children, small }) {
  return (
    <div className={styles.pageLayout + ' ' + `${small && styles.pageLayoutSmall}`}>
      {children}
    </div>
  )
}