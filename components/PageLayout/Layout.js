import styles from '@styles/PageLayout.module.css';

export default function PageLayout({ children }) {
  return (
    <>
      <main className={styles.pageLayout}>{children}</main>
    </>
  )
}