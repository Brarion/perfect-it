import React from 'react'

import styles from './styles.module.scss'

const PulseButton = () => {
  return (
    <div className={styles.buttonWrapper}>
      <a className={styles.button} href={'tel:+7-800-000-00-00'}>
        Позвонить 8 (800) 000-00-00
      </a>
      <div className={styles.firstBorder} />
      <div className={styles.secondBorder} />
    </div>
  )
}

export default PulseButton
