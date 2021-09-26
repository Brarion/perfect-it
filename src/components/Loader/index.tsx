import React from 'react'

import styles from './styles.module.scss'

const Loader = () => {
  return (
    <svg className={styles.spinner} viewBox="0 0 16 16">
      <circle className={styles.path} cx="8" cy="8" r="4" fill="none" strokeWidth="3" />
    </svg>
  )
}

export default Loader
