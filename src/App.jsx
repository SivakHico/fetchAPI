import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const changeName = () => {
    setName('ddd')
  }

  return (
    <div className="App">
      <h1>UseState</h1>
      <div className="card">
        <button onClick={changeName}>+</button>
        <button onClick={changeName}>-</button>
        <p>
          {name}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
