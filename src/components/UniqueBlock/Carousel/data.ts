import React from 'react'

import { ReactComponent as Unique1 } from '../../../assets/unique1.svg'
import { ReactComponent as Unique2 } from '../../../assets/unique2.svg'
import { ReactComponent as Unique3 } from '../../../assets/unique3.svg'
import { ReactComponent as Unique4 } from '../../../assets/unique4.svg'
import { ReactComponent as Unique5 } from '../../../assets/unique5.svg'
import { ReactComponent as Unique6 } from '../../../assets/unique6.svg'

type CarouselItem = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined; }>,
  text: string
}

const data: CarouselItem[] = [{
  icon: Unique1,
  text: 'Наша команда - компетентные, практикующие IT-специалисты с более, чем 15-летним стажем работы',
}, {
  icon: Unique2,
  text: 'Разбираемся в тонкостях динамичной IT-сферы',
}, {
  icon: Unique3,
  text: 'Отбираем кандидатов и целые команды с необходимым опытом работы и компетенциями в различных предметных областях. Кандидаты, отобранные нами, смогут реализовать самые сложные проекты крупного бизнеса и амбициозные стартапы России',
}, {
  icon: Unique4,
  text: 'Perfect IT не дает скоропалительных, невыполнимых обещаний относительно сроков закрытия вакансий, потому что ставит во главу угла «качество» подобранных для Вас кандидатов. Это сократит Ваше время на собеседования и затраты на замену «некачественного» персонала. Вы не будете отрываться от своих рабочих задач',
}, {
  icon: Unique5,
  text: 'Не скрываем, что делаем только первые шаги на рынке ИТ-рекрутинга, но имеем амбициозные планы! Мы готовы быть достаточно гибкими с первыми клиентами как в вопросах нашего вознаграждения, так и технологий взаимодействия',
}, {
  icon: Unique6,
  text: 'Perfect IT ориентируется на долгосрочные отношения с заказчиками. Мы подбираем специалистов не только с глубокой экспертизой и нужным стеком компетенций, но и учитываем личные качества кандидатов. Проще говоря, мы отбираем тех, кто сможет легко и надолго влиться в корпоративную культуру Вашей компании',
}]

// @ts-ignore
export default data;
