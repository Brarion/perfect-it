import React from 'react'

import { ClientType } from '../types'

import styles from './styles.module.scss'

type Props = {
  selectedClientType: ClientType
  change: React.Dispatch<React.SetStateAction<ClientType>>
}

const ClientTypeSwitch = ({ selectedClientType, change }: Props) => {
  const setEmployer = () => {
    change(ClientType.EMPLOYER)
  }

  const setApplicant = () => {
    change(ClientType.APPLICANT)
  }

  return (
    <div className={styles.switch}>
      <h1>{`Присоединяйся\nк нашему\nквалифицированному\nсообществу`}</h1>
      <div className={styles.buttonWrapper}>
        <button className={selectedClientType === ClientType.EMPLOYER ? styles.selected : ''} onClick={setEmployer}>
          Я работодатель
        </button>
        <button className={selectedClientType === ClientType.APPLICANT ? styles.selected : ''} onClick={setApplicant}>
          Я соискатель
        </button>
      </div>
    </div>
  )
}

export default ClientTypeSwitch
