import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [comment, setComment] = useState([])

  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search?query=sky')
      .then((res) => res.json())
      .then((obj) => console.log('obj.objectID'))
  }, [])

  return (
    <div className="App">
      <h1>Fetch Date</h1>
      <div className="card">
        {comment}
      </div>
    </div>
  )
}
