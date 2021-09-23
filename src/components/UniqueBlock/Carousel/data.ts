import React from 'react'

import { ReactComponent as Unique1 } from '../../../assets/unique1.svg'
import { ReactComponent as Unique2 } from '../../../assets/unique2.svg'
import { ReactComponent as Unique3 } from '../../../assets/unique3.svg'
import { ReactComponent as Unique4 } from '../../../assets/unique4.svg'
import { ReactComponent as Unique5 } from '../../../assets/unique5.svg'
import { ReactComponent as Unique6 } from '../../../assets/unique6.svg'

type CarouselItem = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>
  text: string
}

const data: CarouselItem[] = [
  {
    icon: Unique1,
    text: 'Наша команда - компетентные, практикующие\nIT-специалисты с более, чем 15-летним стажем\nработы',
  },
  {
    icon: Unique2,
    text: 'Разбираемся в тонкостях\nдинамичной IT-сферы',
  },
  {
    icon: Unique3,
    text: 'Отбираем кандидатов и целые команды с\nнеобходимым опытом работы и компетенциями\nв различных предметных областях. Кандидаты,\nотобранные нами, смогут реализовать самые\nсложные проекты крупного бизнеса и\nамбициозные стартапы России',
  },
  {
    icon: Unique4,
    text: 'Perfect IT не дает скоропалительных,\nневыполнимых обещаний относительно сроков\nзакрытия вакансий, потому что ставит во главу угла\n«качество» подобранных для Вас кандидатов. Это\nсократит Ваше время на собеседования и затраты\nна замену «некачественного» персонала. Вы не\nбудете отрываться от своих рабочих задач',
  },
  {
    icon: Unique5,
    text: 'Не скрываем, что делаем только первые шаги на\nрынке ИТ-рекрутинга, но имеем амбициозные\nпланы! Мы готовы быть достаточно гибкими с\nпервыми клиентами как в вопросах нашего\nвознаграждения, так и технологий\nвзаимодействия',
  },
  {
    icon: Unique6,
    text: 'Perfect IT ориентируется на долгосрочные отношения\nс заказчиками. Мы подбираем специалистов не только с глубокой\nэкспертизой и нужным стеком компетенций, но и учитываем\nличные качества кандидатов. Проще говоря, мы отбираем тех,\nкто сможет легко и надолго влиться в корпоративную культуру\nВашей компании',
  },
]

// @ts-ignore
export default data
