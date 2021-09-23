import React from 'react'

import styles from './styles.module.scss'
import FeaturesList from './FeaturesList'

const Features = () => {
  return (
    <div className={styles.features}>
      <h1>Особенности работы с кандидатами</h1>
      <FeaturesList />
    </div>
  )
}

export default Features
