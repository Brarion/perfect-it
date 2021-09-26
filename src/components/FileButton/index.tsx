import React from 'react'

import { ReactComponent as Pin } from '../../assets/pin.svg'
import { ReactComponent as Remove } from '../../assets/remove.svg'

import styles from './styles.module.scss'

type Props = {
  text: string
  fileName: string
  remove: () => void
  change: (file: File) => void
}

const FileButton = ({ text, fileName, remove, change }: Props) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      change(e.target.files[0])
    }
  }

  return (
    <div className={styles.buttonWrapper}>
      <div className={styles.button} onClick={remove}>
        <div>{fileName ? fileName : text}</div>
        {fileName ? <Remove /> : <Pin />}
      </div>
      {!fileName && <input type={'file'} onChange={handleInput} />}
    </div>
  )
}

export default FileButton
