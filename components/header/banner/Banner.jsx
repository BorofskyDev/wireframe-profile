import React from 'react'
import styles from './Banner.module.scss'

const Banner = React.forwardRef((props, ref) => {
  return (
    <div className={styles.banner} ref={ref}>
      <span>Joel Borofsky</span>
    </div>
  )
})

export default Banner