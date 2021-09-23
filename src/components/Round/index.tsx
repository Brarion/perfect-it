import React from 'react'

import MagicComponent from './MagicComponent'
import PulseButton from './PulseButton'

import styles from './styles.module.scss'

const Round = () => {
  return (
    <div className={styles.round}>
      <h1>Подберём и закроем вакансии</h1>
      <MagicComponent />
      <div className={styles.buttonWrapper}>
        <PulseButton />
      </div>
    </div>
  )
}

export default Round
