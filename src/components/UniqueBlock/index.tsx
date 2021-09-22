import React from 'react'

import Carousel from './Carousel'

import styles from './styles.module.scss'

const UniqueBlock = () => {
  return <div className={styles.unique}>
    <h1>
      Уникальность агентства для Работодателя –<br />
      в первую очередь мы ИТ-шники,<br />
      а затем уже рекрутеры<br />
    </h1>
    <h2>
      Perfect IT предлагает работодателям рекрутинговый сервис нового поколения, позволяющий закрыть потребности в
      подборе ИТ-персонала с минимальными затратами и наилучшим результатом
    </h2>
    <Carousel />
  </div>
}

// @ts-ignore
export default UniqueBlock
