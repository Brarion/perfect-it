import React from 'react'

import useResize from '../../utils/useResize'

import { ReactComponent as RoadMapImage } from '../../assets/roadMap.svg'
import { ReactComponent as Line } from '../../assets/line.svg'
import { ReactComponent as Ellipse } from '../../assets/ellipse.svg'

import roadMapList from './data'

import styles from './styles.module.scss'

const RoadMap = () => {
  const width = useResize()

  return (
    <div className={styles.roadMap}>
      <h1>{`Уникальность агентства для Соискателя –\nзаведи себе личного Агента`}</h1>
      {width >= 1800 ? (
        <h2>{`В условиях конкурентного рынка ИТ, Perfect IT предлагает стать Вашим личным\nАгентом, что поможет строить Вам свою успешную профессиональную карьеру,\nразвиваться и постоянно повышать размер компенсации`}</h2>
      ) : (
        width >= 376 && (
          <h2>{`В условиях конкурентного рынка ИТ, Perfect IT предлагает стать\nВашим личным Агентом, что поможет строить Вам свою успешную\nпрофессиональную карьеру, развиваться и постоянно повышать\nразмер компенсации`}</h2>
        )
      )}
      <div className={styles.roadMapItems}>
        {width >= 1800 ? (
          <RoadMapImage className={styles.roadMapImage} />
        ) : (
          width >= 376 && (
            <>
              <Ellipse className={styles.ellipse} />
              <Line className={styles.line1} />
              <Line className={styles.line2} />
              <Line className={styles.line3} />
              <Line className={styles.line4} />
              <Ellipse className={styles.ellipse} />
            </>
          )
        )}
        <div className={styles.roadMapItemsWrapper}>
          {roadMapList.map((roadMapItem) => (
            <div key={roadMapItem.index} className={styles.item}>
              <span>
                {width >= 1800 ? roadMapItem.index : width >= 376 ? roadMapItem.indexMd : roadMapItem.indexMd}
              </span>
              <span>{width >= 1800 ? roadMapItem.text : width >= 376 ? roadMapItem.textMd : roadMapItem.textMd}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RoadMap
