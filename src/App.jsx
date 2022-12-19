import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Card/>
    </div>
  )
}

export default App
