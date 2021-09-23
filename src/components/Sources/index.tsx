import React from 'react'

import SourceList from './SourceList'

import styles from './styles.module.scss'

const Sources = () => {
  return (
    <div className={styles.sources}>
      <h1>Источники базы кандидатов</h1>
      <SourceList />
    </div>
  )
}

export default Sources
