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
          <h2>{width >= 1800 ? item.title : width >= 376 ? item.titleMd : item.titleMd}</h2>
          <h3>{width >= 1800 ? item.text : width >= 376 ? item.textMd : item.textMd}</h3>
        </div>
      ))}
    </div>
  )
}

export default SourceList
