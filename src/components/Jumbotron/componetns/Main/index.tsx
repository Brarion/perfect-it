import React from 'react'

import scrollTo from '../../../../helpers/scrollTo'

import { ReactComponent as BackgroundImage } from '../../../../assets/jumbotronImage.svg'

import styles from './styles.module.scss'
import Button from '../../../Button'

const Main = () => {

  const click = () => {
    scrollTo('request')
  }

  return <>
    <div className={styles.main}>
      <h1>PerfectIT – кадровое агентство по подбору ИТ-персонала</h1>
      <h2>Работаем с 2006 года</h2>
      <h3>Специализируемся на ИТ-персонале с 2021 года</h3>
      <Button text={'Оставить заявку'} click={click} width={327} height={90}/>
    </div>
    <BackgroundImage className={styles.backgroundImage} />
  </>
}

export default Main
