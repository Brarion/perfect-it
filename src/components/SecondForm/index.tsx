import React from 'react'

import useResize from '../../utils/useResize'

import axios from 'axios'

import FileButton from '../FileButton'
import Input from '../BigForm/Input'
import Loader from '../Loader'
import Button from '../BigForm/Button'

import { ReactComponent as Money } from '../../assets/money.svg'

import styles from './styles.module.scss'

type FormState = {
  file: File | null
  face: string
  phone: string
}

const INITIAL_STATE = {
  file: null,
  face: '',
  phone: '',
}

const SecondForm = () => {
  const [formState, setFormState] = React.useState<FormState>(INITIAL_STATE)
  const [isValid, setIsValid] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(false)

  const width = useResize()

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
            'http://localhost:1337/invites',
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
    <div className={styles.secondForm}>
      <div className={styles.leftSide}>
        {width >= 1800 ? (
          <h1>{`Приведи друга,\nполучи вознаграждение!`}</h1>
        ) : (
          width >= 376 && <h1>{`Приведи друга, получи\nвознаграждение!`}</h1>
        )}
        <Money className={styles.money} />
      </div>
      <div className={styles.rightSide}>
        <FileButton
          text={'Рекомедовать'}
          fileName={formState.file?.name ?? ''}
          remove={() => setFormState({ ...formState, file: null })}
          change={(file) => setFormState({ ...formState, file })}
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
        {loading ? (
          <div className={styles.loading}>
            <Loader />
            <span>Загрузка</span>
          </div>
        ) : (
          <Button click={sendForm} disabled={!isValid} />
        )}
      </div>
    </div>
  )
}

export default SecondForm
