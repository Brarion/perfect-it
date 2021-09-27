import React from 'react'

import useResize from '../../../utils/useResize'

import { ClientType } from '../types'

import styles from './styles.module.scss'

type Props = {
  selectedClientType: ClientType
  change: React.Dispatch<React.SetStateAction<ClientType>>
}

const ClientTypeSwitch = ({ selectedClientType, change }: Props) => {
  const width = useResize()

  const setEmployer = () => {
    change(ClientType.EMPLOYER)
  }

  const setApplicant = () => {
    change(ClientType.APPLICANT)
  }

  return (
    <div className={styles.switch}>
      {width >= 1800 ? (
        <h1>{`Присоединяйся\nк нашему\nквалифицированному\nсообществу`}</h1>
      ) : width >= 960 ? (
        <h1>{`Присоединяйся к нашему\nквалифицированному сообществу`}</h1>
      ) : (
        <h1>{`Присоединяйся к нашему\nквалифицированному\nсообществу`}</h1>
      )}
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
