import React from 'react'

import Header from './componetns/Header'
import Main from './componetns/Main'

import styles from './styles.module.scss'

const Jumbotron = () => {
  return (
    <div className={styles.jumbotron}>
      <div className={styles.wrapper}>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default Jumbotron
