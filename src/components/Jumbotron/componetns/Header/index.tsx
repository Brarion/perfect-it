import React from 'react'

import scrollTo from '../../../../helpers/scrollTo'

import { ReactComponent as Icon } from '../../../../assets/icon.svg'

import styles from './styles.module.scss'

const Header = () => {
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
        <Icon onClick={scrollToTop} />
        <span onClick={scrollToEmployer}>Я работодатель</span>
        <span onClick={scrollToApplicant}>Я соискатель</span>
        <span onClick={scrollToContacts}>Контакты</span>
      </div>
      <div>
        <a className={styles.phone} href="tel:+7-800-000-00-00">
          8 (800) 000-00-00
        </a>
      </div>
    </header>
  )
}

export default Header
