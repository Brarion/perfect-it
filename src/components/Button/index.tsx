import React from 'react'

import styles from './styles.module.scss'

type Props = {
  text: string
  click: React.MouseEventHandler<HTMLButtonElement>
  width?: number,
  height?: number
}

const Button = (props: Props) => {
  const { text, click, width, height } = props

  return <button className={styles.button} onClick={click} style={{
    width: width ? `${width}px` : 'auto',
    height: height ? `${height}px` : 'auto',
  }}>{text}</button>
}

export default Button
