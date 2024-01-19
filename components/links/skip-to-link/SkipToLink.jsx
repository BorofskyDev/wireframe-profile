import Link from 'next/link'
import styles from './SkipToLink.module.scss'

export default function SkipToLink({ children, href }) {
  return (
    
    <Link href={href} className={styles.skipToLink}>
      {children}
    </Link>
  )
}
