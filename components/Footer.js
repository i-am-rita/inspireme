import Link from 'next/link'
import styles from '../styles/Footer.module.css'
export default function Footer() {
  return (
    <Footer className={styles.footer}>
      <p>Copyright &copy; Life Events 2021</p>
      <p>
        <Link href="/about">About This Project</Link>
      </p>
    </Footer>
  )
}
