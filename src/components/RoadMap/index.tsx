import React from 'react'

import { ReactComponent as RoadMapImage } from '../../assets/roadMap.svg'

import roadMapList from './data'

import styles from './styles.module.scss'

const RoadMap = () => {
  return (
    <div className={styles.roadMap}>
      <h1>{`Уникальность агентства для Соискателя –\nзаведи себе личного Агента`}</h1>
      <h2>{`В условиях конкурентного рынка ИТ, Perfect IT предлагает стать Вашим личным\nАгентом, что поможет строить Вам свою успешную профессиональную карьеру,\nразвиваться и постоянно повышать размер компенсации`}</h2>
      <div className={styles.roadMapItems}>
        <RoadMapImage className={styles.roadMapImage} />
        <div className={styles.roadMapItemsWrapper}>
          {roadMapList.map((roadMapItem) => (
            <div key={roadMapItem.index} className={styles.item}>
              <span>{roadMapItem.index}</span>
              <span>{roadMapItem.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RoadMap
