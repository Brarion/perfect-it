import React from 'react'

import axios from 'axios'

import Jumbotron from './components/Jumbotron'
import UniqueBlock from './components/UniqueBlock'
import Sources from './components/Sources'
import Features from './components/Features'
import Round from './components/Round'
import RoadMap from './components/RoadMap'
import BigForm from './components/BigForm'
import SecondForm from './components/SecondForm'
import Footer from './components/Footer'
import LittleMenu from './components/Jumbotron/componetns/LittleMenu'

type Local = {
  jwt: string
}

const App = () => {
  const [openedBurger, setOpenedBurger] = React.useState<boolean>(false)

  const burgerClick = () => {
    setOpenedBurger(!openedBurger)
  }

  React.useEffect(() => {
    axios
      .post<Local>('http://localhost:1337/auth/local', {
        identifier: 'kolyasaa@gmail.com',
        password: 'iyi4v3)JgYq5_T&',
      })
      .then((result) => {
        localStorage.setItem('jwt', result.data.jwt)
      })
  })

  return (
    <>
      {openedBurger && <LittleMenu burgerClick={burgerClick} />}
      <Jumbotron burgerClick={burgerClick} openedBurger={openedBurger} />
      <UniqueBlock />
      <Sources />
      <Features />
      <Round />
      <RoadMap />
      <BigForm />
      <SecondForm />
      <Footer />
    </>
  )
}

export default App
