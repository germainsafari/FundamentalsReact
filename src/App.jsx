import { useState } from 'react'
import './App.css'


const App = (name, age, team=None) => {

  const playinfo = {
    name:"jokic",
    age:28,
    team:"nuggets"
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        `the player's Name: ${name} and the age is ${age} currently playing for ${team}`
      </p>
    </>
  )
}

export default App
