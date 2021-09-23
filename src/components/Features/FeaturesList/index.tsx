import React from 'react'

import featureList from './data'

import styles from './styles.module.scss'

const FeaturesList = () => {
  return (
    <div className={styles.featuresList}>
      {featureList.map((feature) => (
        <div key={feature.text} className={styles.item}>
          <feature.icon />
          <span>{feature.text}</span>
        </div>
      ))}
    </div>
  )
}

export default FeaturesList
