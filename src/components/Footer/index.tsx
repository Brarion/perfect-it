import React from 'react'

import useResize from '../../utils/useResize'

import { ReactComponent as WhiteLogo } from '../../assets/whiteLogo.svg'
import { ReactComponent as Facebook } from '../../assets/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'
import { ReactComponent as Twitter } from '../../assets/twitter.svg'

import styles from './styles.module.scss'

const Footer = () => {
  const width = useResize()

  return (
    <div id={'contacts'} className={styles.footer}>
      <div className={styles.firstPart}>
        <div className={styles.firstCol}>
          <WhiteLogo />
          <div className={styles.socialMedia}>
            <a href={'https://facebook.com'}>
              <Facebook />
            </a>
            <a href={'https://instagram.com'}>
              <Instagram />
            </a>
            <a href={'https://twitter.com'}>
              <Twitter />
            </a>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.secondCol}>
            <a href="tel:+7-800-000-00-00">+7 (800) 000-00-00</a>
            <a href="mailto:info@perfectit.ru">info@perfectit.ru</a>
          </div>
          <div className={styles.thirdCol}>
            <div>Москва</div>
            <a href="https://www.google.com/maps/place/%D0%BF%D1%80.+%D0%9C%D0%B8%D1%80%D0%B0,+55,+406,+%D0%9E%D0%BC%D1%81%D0%BA,+%D0%9E%D0%BC%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+644077/data=!4m2!3m1!1s0x43ab008a64258953:0xb4f7062c270b5477?sa=X&ved=2ahUKEwjK38j8hp3zAhXP-ioKHVBsCOcQ8gF6BAgQEAE">
              Проспект мира, 55, стр. 1, к. 4, оф. 406
            </a>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.secondPart}>
        {width >= 960
          ? `Рекрутинговое агенство Perfect IT 2021 © Все права защищены`
          : `Рекрутинговое агенство Perfect IT 2021\n© Все права защищены`}
      </div>
    </div>
  )
}

export default Footer
