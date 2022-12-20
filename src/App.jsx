import { useState } from 'react'
import data from '../data'
import reactLogo from './assets/react.svg'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

function App() {
  const cards = data.map((card, index) => (
    <Card key={index} {...card}/>
  ))
  return (
    <div className="App">
      <Navbar/>
      {cards}
    </div>
  )
}

export default App
