import React from 'react'

import Header from './componetns/Header'
import Main from './componetns/Main'

import styles from './styles.module.scss'

type Props = {
  burgerClick: () => void
  openedBurger: boolean
}

const Jumbotron = ({ burgerClick, openedBurger }: Props) => {
  return (
    <div className={styles.jumbotron}>
      <div className={styles.wrapper}>
        <Header burgerClick={burgerClick} openedBurger={openedBurger} />
        <Main />
      </div>
    </div>
  )
}

export default Jumbotron
