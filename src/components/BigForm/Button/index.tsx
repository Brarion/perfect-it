import React from 'react'

import styles from './styles.module.scss'

type Props = {
  click: React.MouseEventHandler<HTMLButtonElement>
  disabled: boolean
}

const Button = ({ click, disabled }: Props) => {
  return (
    <button onClick={click} className={`${styles.button} ${disabled ? styles.disabled : ''}`}>
      Отправить
    </button>
  )
}

export default Button
