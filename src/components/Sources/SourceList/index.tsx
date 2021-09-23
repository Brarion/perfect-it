import React from 'react'

import data from './data'

import styles from './styles.module.scss'

const SourceList = () => {
  return (
    <div className={styles.list}>
      {data.map((item) => (
        <div key={item.title} className={styles.item}>
          <h2>{item.title}</h2>
          <h3>{item.text}</h3>
        </div>
      ))}
    </div>
  )
}

export default SourceList
