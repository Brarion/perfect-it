import React from 'react'

import { ReactComponent as CheckboxIcon } from '../../../assets/checkbox.svg'

import styles from './styles.module.scss'

type Props = {
  change: () => void
  checked: boolean
}

const Checkbox = ({ change, checked }: Props) => {
  return (
    <div className={styles.checkbox}>
      <div className={styles.icon} onClick={change}>
        {checked && <CheckboxIcon />}
      </div>
      <span>
        Я согласен с <a href={'https://vk.com'}>политикой обработки персональных данных</a>
      </span>
    </div>
  )
}

export default Checkbox
