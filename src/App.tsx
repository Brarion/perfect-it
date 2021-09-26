import React from 'react'

import Jumbotron from './components/Jumbotron'
import UniqueBlock from './components/UniqueBlock'
import Sources from './components/Sources'
import Features from './components/Features'
import Round from './components/Round'
import RoadMap from './components/RoadMap'
import BigForm from './components/BigForm'
import axios from 'axios'
import SecondForm from './components/SecondForm'

type Local = {
  jwt: string
}

const App = () => {
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
      <Jumbotron />
      <UniqueBlock />
      <Sources />
      <Features />
      <Round />
      <RoadMap />
      <BigForm />
      <SecondForm />
    </>
  )
}

export default App
