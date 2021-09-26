import React from 'react'

import Button from '../../../Button'

import scrollTo from '../../../../helpers/scrollTo'

import { ReactComponent as Icon } from '../../../../assets/icon.svg'

import styles from './styles.module.scss'

type Props = {
  burgerClick: () => void
}

const LittleMenu = ({ burgerClick }: Props) => {
  const click = () => {
    scrollTo('request')
    burgerClick()
  }

  const scrollToEmployer = () => {
    scrollTo('iam')
    burgerClick()
  }

  const scrollToApplicant = () => {
    scrollTo('iam')
    burgerClick()
  }

  const scrollToContacts = () => {
    scrollTo('contacts')
    burgerClick()
  }

  return (
    <div className={styles.littleMenu}>
      <Icon className={styles.icon} />
      <div className={styles.main}>
        <span onClick={scrollToEmployer}>Я работодатель</span>
        <span onClick={scrollToApplicant}>Я соискатель</span>
        <span onClick={scrollToContacts}>Контакты</span>
      </div>
      <div className={styles.footer}>
        <a className={styles.phone} href="tel:+7-800-000-00-00">
          8 (800) 000-00-00
        </a>
        <a className={styles.mail} href="mailto:info@perfectit.ru">
          info@perfectit.ru
        </a>
        <Button text={'Оставить заявку'} click={click} width={335} height={90} />
      </div>
    </div>
  )
}

export default LittleMenu
