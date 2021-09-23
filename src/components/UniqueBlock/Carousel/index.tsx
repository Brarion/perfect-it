import React from 'react'

import { ReactComponent as Arrow } from '../../../assets/arrow.svg'

import styles from './styles.module.scss'

import data from './data'

const Carousel = () => {
  const [gradientWidth, setGradientWidth] = React.useState<number>(1480)

  // @ts-ignore
  const scroll = (e) => {
    setGradientWidth(1480 + e.target.scrollLeft)
  }

  const scrollNext = () => {
    const element = document.getElementById('carousel')

    if (element) {
      const elementWidth = 575
      const intervalSpeed = 10
      const newScrollLeft = element.scrollLeft + elementWidth
      const interval = setInterval(() => {
        if (element.scrollLeft < newScrollLeft) {
          element.scrollLeft += intervalSpeed
        }
      }, intervalSpeed)

      setTimeout(() => {
        clearInterval(interval)
      }, 1000)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel} onScroll={scroll} id={'carousel'}>
        {data.map((item, index) => (
          <div className={styles.item} key={item.text} id={`carouselItem${index.toString()}`}>
            <item.icon />
            <span>{item.text}</span>
          </div>
        ))}

        <div className={`${gradientWidth < 3000 ? styles.gradient : ''}`} style={{ width: `${gradientWidth}px` }} />
      </div>
      {gradientWidth < 3400 && <Arrow className={styles.arrow} onClick={scrollNext} />}
    </div>
  )
}

export default Carousel
