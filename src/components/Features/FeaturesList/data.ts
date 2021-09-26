import React from 'react'

import { ReactComponent as Feature1 } from '../../../assets/feature1.svg'
import { ReactComponent as Feature2 } from '../../../assets/feature2.svg'
import { ReactComponent as Feature3 } from '../../../assets/feature3.svg'
import { ReactComponent as Feature4 } from '../../../assets/feature4.svg'
import { ReactComponent as Feature5 } from '../../../assets/feature5.svg'
import { ReactComponent as Feature6 } from '../../../assets/feature6.svg'

type FeatureItem = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>
  text: string
  textMd: string
}

const featureList: FeatureItem[] = [
  {
    icon: Feature1,
    text: 'Подбираем  кандидатов\nс рекомендациями',
    textMd: 'Подбираем  кандидатов\nс рекомендациями',
  },
  {
    icon: Feature2,
    text: 'Даем заключение по кандидату\n(стандартное по форме агентства либо\nпо индивидуальному формату для каждого Заказчика)',
    textMd:
      'Даем заключение по кандидату\n(стандартное по форме агентства либо\nпо индивидуальному формату для\nкаждого Заказчика)',
  },
  {
    icon: Feature3,
    text: 'Наши ИТ-эксперты проводят\nглубокие интервью и тесты',
    textMd: 'Наши ИТ-эксперты проводят\nглубокие интервью и тесты',
  },
  {
    icon: Feature4,
    text: 'Сопровождаем кандидата\nдо оформления',
    textMd: 'Сопровождаем кандидата\nдо оформления',
  },
  {
    icon: Feature5,
    text: 'Оцениваем hard и soft\nskills кандидатов',
    textMd: 'Оцениваем hard и soft\nskills кандидатов',
  },
  {
    icon: Feature6,
    text: 'По окончании испытательного срока получаем\nфидбэк относительно удовлетворенности Заказчика,\nпри необходимости производим замену',
    textMd:
      'По окончании испытательного срока\nполучаем фидбэк относительно\nудовлетворенности Заказчика, при\nнеобходимости производим замену',
  },
]

export default featureList
