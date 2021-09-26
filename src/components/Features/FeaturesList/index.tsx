import React from 'react'

import useResize from '../../../utils/useResize'

import featureList from './data'

import styles from './styles.module.scss'

const FeaturesList = () => {
  const width = useResize()
  return (
    <div className={styles.featuresList}>
      {featureList.map((feature) => (
        <div key={feature.text} className={styles.item}>
          <feature.icon />
          <span>{width >= 1800 ? feature.text : width >= 376 ? feature.textMd : feature.textMd}</span>
        </div>
      ))}
    </div>
  )
}

export default FeaturesList
