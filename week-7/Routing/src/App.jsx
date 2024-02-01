import { useContext, useState } from 'react'
import { CountContext } from './Context'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // wrap anyone that wants to use teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count ({setCount}) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  )
}

function CountRenderer () {
  const counter = useContext(CountContext)
  return (
    <div>
      {counter}
    </div>
  )
}

function Buttons ({setCount}) {
  const counter = useContext(CountContext)
  return (
    <div>
      <button onClick={() => {
        setCount(counter + 1)
      }}>
        Increment
      </button>
      <button onClick={() => {
        setCount(counter - 1)
      }}>
        Deccrement
      </button>
    </div>
  )
  
}

export default App
