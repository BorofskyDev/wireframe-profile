import Link from 'next/link'
import styles from './InternalLink.module.scss'

export default function InternalLink({ children, href, ...props }) {
  return (
    <Link {...props} href={href} className={styles.internalLink}>
      {children}
    </Link>
  )
}
