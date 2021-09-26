import React from 'react'

import axios from 'axios'

import Input from '../Input'
import Checkbox from '../Checkbox'
import Button from '../Button'
import Loader from '../../Loader'

import styles from './styles.module.scss'
import FileButton from '../../FileButton'

type FormState = {
  name: string
  phone: string
  email: string
  city: string
  spec: string
  file: File | null
  contactType: string
  time: string
  comment: string
  agree: boolean
}

const INITIAL_STATE: FormState = {
  name: '',
  phone: '',
  email: '',
  city: '',
  spec: '',
  file: null,
  contactType: '',
  time: '',
  comment: '',
  agree: false,
}

const ApplicantForm = () => {
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
    const formData = new FormData()
    formData.set('files', formState.file as Blob, formState.file?.name ?? '')
    await axios
      .post('http://localhost:1337/upload', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      })
      .then(async (response) => {
        await axios
          .post(
            'http://localhost:1337/applicants',
            { ...formState, file: response.data[0] },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
              },
            }
          )
          .finally(() => setLoading(false))
      })
      .catch(() => setLoading(false))
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
        <Input value={formState.name} placeholder={'Имя'} change={(name) => setFormState({ ...formState, name })} />
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
          placeholder={'Специальность'}
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
        <FileButton
          change={(file) => setFormState({ ...formState, file })}
          fileName={formState.file?.name ?? ''}
          remove={() => setFormState({ ...formState, file: null })}
          text={'Прикрепить резюме'}
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

export default ApplicantForm
