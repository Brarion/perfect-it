import React from 'react'

import useResize from '../../../../utils/useResize'

import scrollTo from '../../../../helpers/scrollTo'

import { ReactComponent as Icon } from '../../../../assets/icon.svg'

import styles from './styles.module.scss'

type Props = {
  burgerClick: () => void
  openedBurger: boolean
}

const Header = ({ burgerClick, openedBurger }: Props) => {
  const width = useResize()

  const scrollToTop = () => {
    scrollTo('header')
  }

  const scrollToEmployer = () => {
    scrollTo('iam')
  }

  const scrollToApplicant = () => {
    scrollTo('iam')
  }

  const scrollToContacts = () => {
    scrollTo('contacts')
  }

  return (
    <header id={'header'}>
      <div className={styles.leftSide}>
        {!openedBurger && <Icon onClick={scrollToTop} />}
        {width >= 960 && (
          <>
            <span onClick={scrollToEmployer}>Я работодатель</span>
            <span onClick={scrollToApplicant}>Я соискатель</span>
            <span onClick={scrollToContacts}>Контакты</span>
          </>
        )}
      </div>
      {width >= 960 ? (
        <div>
          <a className={styles.phone} href="tel:+7-800-000-00-00">
            8 (800) 000-00-00
          </a>
        </div>
      ) : (
        <div className={`${styles.littleHeader} ${openedBurger ? styles.opened : ''}`}>
          <button onClick={burgerClick} className={`${styles.navToggle} ${openedBurger ? styles.opened : ''}`}>
            <span className={styles.top} />
            <span className={styles.middle} />
            <span className={styles.bottom} />
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
