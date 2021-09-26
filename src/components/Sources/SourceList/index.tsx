import React from 'react'

import useResize from '../../../utils/useResize'

import data from './data'

import styles from './styles.module.scss'

const SourceList = () => {
  const width = useResize()
  return (
    <div className={styles.list}>
      {data.map((item) => (
        <div key={item.title} className={styles.item}>
          <h2>{width >= 1800 ? item.title : width >= 960 ? item.titleMd : item.titleSm}</h2>
          <h3>{width >= 1800 ? item.text : width >= 960 ? item.textMd : item.textSm}</h3>
        </div>
      ))}
    </div>
  )
}

export default SourceList
