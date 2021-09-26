import React from 'react'

import useResize from '../../utils/useResize'

import Carousel from './Carousel'

import styles from './styles.module.scss'

const UniqueBlock = () => {
  const width = useResize()

  return (
    <div className={styles.unique}>
      {width >= 1800 ? (
        <h1>
          Уникальность агентства для Работодателя –<br />
          в первую очередь мы ИТ-шники,
          <br />
          а затем уже рекрутеры
          <br />
        </h1>
      ) : width >= 376 ? (
        <h1>
          Уникальность агентства для Работодателя –<br />
          в первую очередь мы ИТ-шники, а затем уже
          <br />
          рекрутеры
        </h1>
      ) : (
        <h1>
          Уникальность агентства
          <br />
          для Работодателя –<br />
          в первую очередь мы
          <br />
          ИТ-шники, а затем уже
          <br />
          рекрутеры
        </h1>
      )}
      <h2>
        Perfect IT предлагает работодателям рекрутинговый сервис нового поколения, позволяющий закрыть потребности в
        подборе ИТ-персонала с минимальными затратами и наилучшим результатом
      </h2>
      <Carousel />
    </div>
  )
}

// @ts-ignore
export default UniqueBlock
