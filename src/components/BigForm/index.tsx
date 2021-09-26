import React from 'react'

import ClientTypeSwitch from './ClientTypeSwitch'
import EmployerForm from './EmployerForm'
import ApplicantForm from './ApplicantForm'

import { ClientType } from './types'

import styles from './styles.module.scss'

const BigForm = () => {
  const [clientType, setClientType] = React.useState<ClientType>(ClientType.EMPLOYER)

  return (
    <div id={'iam'} className={styles.bigFormWrapper}>
      <ClientTypeSwitch selectedClientType={clientType} change={setClientType} />
      {clientType === ClientType.EMPLOYER ? <EmployerForm /> : <ApplicantForm />}
    </div>
  )
}

export default BigForm
