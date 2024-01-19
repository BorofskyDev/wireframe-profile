
import styles from './SectionTitle.module.scss'
import Heading2 from '../heading2/heading2'

export default function SectionTitle({ children }) {
    return (
      <div className={styles.sectionTitle}>
        <Heading2>About</Heading2>
      </div>
    )
}