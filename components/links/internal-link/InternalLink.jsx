import Link from 'next/link'
import styles from './InternalLink.module.scss'

export default function InternalLink({ children, href, ...props }) {
  return (
    <div className={styles.internalLink}>
      <Link {...props} href={href} className={styles.link}>
        {children}
      </Link>
    </div>
  )
}
