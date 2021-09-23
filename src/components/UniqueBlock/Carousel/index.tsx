import React from 'react'

import { ReactComponent as Arrow } from '../../../assets/arrow.svg'

import styles from './styles.module.scss'

import data from './data'
import scrollTo from '../../../helpers/scrollTo'

const Carousel = () => {
  const [gradientWidth, setGradientWidth] = React.useState<number>(1480)

  // @ts-ignore
  const scroll = (e) => {
    setGradientWidth(1480 + e.target.scrollLeft)
  }

  const scrollNext = () => {
    if (gradientWidth <= 1480) {
      scrollTo('carouselItem2')
    } else if (gradientWidth <= 2213) {
      scrollTo('carouselItem3')
    } else if (gradientWidth <= 2780) {
      scrollTo('carouselItem4')
    } else if (gradientWidth <= 3500) {
      scrollTo('carouselItem5')
    }
  }

  return <div className={styles.wrapper}>
    <div className={styles.carousel} onScroll={scroll}>
      {data.map((item, index) =>
        <div className={styles.item} key={item.text} id={`carouselItem${index.toString()}`}>
          <item.icon />
          <span>{item.text}</span>
        </div>,
      )}

      <div className={`${gradientWidth < 3150 ? styles.gradient : ''}`} style={{ width: `${gradientWidth}px` }} />

    </div>
    {gradientWidth < 3682 && <Arrow className={styles.arrow} onClick={scrollNext} />}
  </div>
}

export default Carousel
