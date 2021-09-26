import React from 'react'

import axios from 'axios'

import Input from '../Input'
import Checkbox from '../Checkbox'
import Button from '../Button'
import Loader from '../../Loader'

import styles from './styles.module.scss'

type FormState = {
  organization: string
  face: string
  phone: string
  email: string
  city: string
  spec: string
  contactType: string
  time: string
  comment: string
  agree: boolean
}

const INITIAL_STATE: FormState = {
  organization: '',
  face: '',
  phone: '',
  email: '',
  city: '',
  spec: '',
  contactType: '',
  time: '',
  comment: '',
  agree: false,
}

const EmployerForm = () => {
  const [formState, setFormState] = React.useState<FormState>(INITIAL_STATE)
  const [isValid, setIsValid] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(false)

  const validate = () => {
    setIsValid(!Object.entries(formState).filter(([key, value]) => key !== 'comment' && !value).length)
  }

  React.useEffect(() => {
    validate()
  }, [formState])

  const handleRequest = async () => {
    await axios
      .post('http://localhost:1337/employers', formState, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      })
      .finally(() => setLoading(false))
  }

  const sendForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (isValid) {
      setLoading(true)
      handleRequest().then()
    }
  }

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <Input
          value={formState.organization}
          placeholder={'Организация'}
          change={(organization) => setFormState({ ...formState, organization })}
        />
        <Input
          value={formState.face}
          placeholder={'Контактное лицо'}
          change={(face) => setFormState({ ...formState, face })}
        />
        <Input
          value={formState.phone}
          placeholder={'Телефон'}
          change={(phone) => setFormState({ ...formState, phone })}
          type={'tel'}
        />
        <Input
          value={formState.email}
          placeholder={'E-mail'}
          change={(email) => setFormState({ ...formState, email })}
        />
        <Input value={formState.city} placeholder={'Город'} change={(city) => setFormState({ ...formState, city })} />
        <Input
          value={formState.spec}
          placeholder={'Требуемый специалист'}
          change={(spec) => setFormState({ ...formState, spec })}
        />
        <Input
          value={formState.contactType}
          placeholder={'Предпочитаемый способ связи'}
          change={(contactType) => setFormState({ ...formState, contactType })}
        />
        <Input
          value={formState.time}
          placeholder={'Удобное время для связи'}
          change={(time) => setFormState({ ...formState, time })}
        />
        <Input
          value={formState.comment}
          placeholder={'Дополнительные комментарии'}
          change={(comment) => setFormState({ ...formState, comment })}
        />
      </form>
      <div className={styles.checkboxWrapper}>
        <Checkbox checked={formState.agree} change={() => setFormState({ ...formState, agree: !formState.agree })} />
      </div>
      {loading ? (
        <div className={styles.loading}>
          <Loader />
          <span>Загрузка</span>
        </div>
      ) : (
        <div className={styles.buttonWrapper}>
          <Button click={sendForm} disabled={!isValid} />
        </div>
      )}
    </div>
  )
}

export default EmployerForm
