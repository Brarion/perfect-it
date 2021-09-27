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
      {width >= 960 ? (
        <h1>{`Уникальность агентства для Соискателя –\nзаведи себе личного Агента`}</h1>
      ) : (
        <h1>{`Уникальность агентства для\nСоискателя – заведи себе\nличного Агента`}</h1>
      )}
      {width >= 1800 ? (
        <h2>{`В условиях конкурентного рынка ИТ, Perfect IT предлагает стать Вашим личным\nАгентом, что поможет строить Вам свою успешную профессиональную карьеру,\nразвиваться и постоянно повышать размер компенсации`}</h2>
      ) : width >= 960 ? (
        <h2>{`В условиях конкурентного рынка ИТ, Perfect IT предлагает стать\nВашим личным Агентом, что поможет строить Вам свою успешную\nпрофессиональную карьеру, развиваться и постоянно повышать\nразмер компенсации`}</h2>
      ) : (
        <h2>{`В условиях конкурентного рынка ИТ,\nPerfect IT предлагает стать Вашим\nличным Агентом, что поможет строить\nВам свою успешную профессиональную\nкарьеру, развиваться и постоянно\nповышать размер компенсации`}</h2>
      )}
      <div className={styles.roadMapItems}>
        {width >= 1800 ? (
          <RoadMapImage className={styles.roadMapImage} />
        ) : (
          width >= 960 && (
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
          {roadMapList.map((roadMapItem, index) => (
            <div key={roadMapItem.index} className={styles.item}>
              {width >= 960 ? (
                <span>{width >= 1800 ? roadMapItem.index : width >= 960 && roadMapItem.indexMd}</span>
              ) : (
                <div className={styles.indexBlock}>
                  <span>{roadMapItem.indexSm}</span>
                  {index !== roadMapList.length - 1 && <div className={styles.line} />}
                </div>
              )}
              <span>{width >= 1800 ? roadMapItem.text : width >= 960 ? roadMapItem.textMd : roadMapItem.textSm}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RoadMap
