import React from 'react'

// @ts-ignore
import MaskedInput from 'react-text-mask/dist/reactTextMask'

import styles from './styles.module.scss'

type Props = {
  value: string
  change: (value: string) => void
  placeholder: string
  error?: boolean
  type?: string
}

const Input = ({ value, change, placeholder, error, type }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    change(e.target.value)
  }

  if (type === 'tel') {
    return (
      <MaskedInput
        mask={['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        className={`${styles.input} ${error ? styles.error : ''}`}
      />
    )
  }

  return (
    <input
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`${styles.input} ${error ? styles.error : ''}`}
    />
  )
}

export default Input
