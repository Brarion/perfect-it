import React from 'react'

import useResize from '../../../utils/useResize'

import { ReactComponent as Arrow } from '../../../assets/arrow.svg'

import styles from './styles.module.scss'

import data from './data'

const Carousel = () => {
  const [gradientWidth, setGradientWidth] = React.useState<number>(0)

  const width = useResize()

  const gradientWidthValue = width >= 1800 ? 1480 : width >= 376 ? 800 : 800
  const hideArrowValue = width >= 1800 ? 1800 : width >= 376 ? 1100 : 800

  console.log(gradientWidth)

  // @ts-ignore
  const scroll = (e) => {
    setGradientWidth(e.target.scrollLeft)
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
            <span>{width >= 1800 ? item.text : width >= 376 ? item.textMd : item.textMd}</span>
          </div>
        ))}

        <div
          className={`${gradientWidth < hideArrowValue ? styles.gradient : ''}`}
          style={{ width: `${gradientWidth + gradientWidthValue}px` }}
        />
      </div>
      {gradientWidth < hideArrowValue && <Arrow className={styles.arrow} onClick={scrollNext} />}
    </div>
  )
}

export default Carousel
