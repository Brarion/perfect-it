import React from 'react'

import { ReactComponent as Analytic } from '../../../assets/analytic.svg'
import { ReactComponent as Helper } from '../../../assets/helper.svg'
import { ReactComponent as Arch } from '../../../assets/arch.svg'
import { ReactComponent as Front } from '../../../assets/front.svg'
import { ReactComponent as DM } from '../../../assets/dm.svg'
import { ReactComponent as MediumCircle } from '../../../assets/mediumCircle.svg'
import { ReactComponent as DevOpsCircle } from '../../../assets/devopsCircle.svg'
import { ReactComponent as Backend } from '../../../assets/backend.svg'
import { ReactComponent as SuperLittleCircle } from '../../../assets/superLittleCircle.svg'
import { ReactComponent as Tester } from '../../../assets/tester.svg'

import styles from './styles.module.scss'

const MagicComponent = () => {
  return (
    <div className={styles.roundWrapper}>
      <div className={styles.bigCircle}>
        <div className={styles.analytic}>
          <span>Аналитик</span>
          <Analytic />
        </div>
        <div className={`${styles.helper} ${styles.reverse}`}>
          <span>
            ИТ-поддержка
            <br />и инфраструктура
          </span>
          <Helper />
        </div>
        <div className={`${styles.arch} ${styles.reverse}`}>
          <span>Архитектор</span>
          <Arch />
        </div>
      </div>
      <div className={styles.mediumCircle}>
        <div className={`${styles.front} ${styles.reverse}`}>
          <span>
            Front-end
            <br />
            разработчик
          </span>
          <Front />
        </div>
        <div className={`${styles.dm} ${styles.reverse}`}>
          <span>Delivery manager</span>
          <DM />
        </div>
        <div className={`${styles.mediumCircleIcon} ${styles.reverse}`}>
          <MediumCircle />
        </div>
      </div>
      <div className={styles.littleCircle}>
        <div className={`${styles.devops} ${styles.reverse}`}>
          <span>DevOps инженеры</span>
          <DevOpsCircle />
        </div>
        <div className={`${styles.security} ${styles.reverse}`}>
          <span>
            Информационная
            <br />
            безопасность
          </span>
          <DevOpsCircle />
        </div>
        <div className={`${styles.backend} ${styles.reverse}`}>
          <span>
            Back-end
            <br />
            разработчик
          </span>
          <Backend />
        </div>
      </div>
      <div className={styles.superLittleCircle}>
        <div className={styles.superLittleCircleIcon}>
          <SuperLittleCircle />
        </div>
      </div>
      <div className={styles.centerCircle}>
        <div className={`${styles.tester} ${styles.reverse}`}>
          <span>Тестировщик</span>
          <Tester />
        </div>
      </div>
    </div>
  )
}

export default MagicComponent
