import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [comment, setComment] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search?query=car')
      .then((res) => res.json())
      .then((obj) => setComment(obj.hits))
  }, [])

  const searchFor = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <h1>Fetch Data From Api</h1>
      <div>
        <input onChange={searchFor} value={search} type="text" placeholder='Search for what ...' />
        <span>{search}</span>
        
      </div>
      <div className="card">
        {comment.map((c) =>
        (
          <>
            <div>
              <li>TITLE: {c.title}</li>
              <li>AUTHOR: {c.author}</li>
              <li>POINTS: {c.points}</li>
              <li>CREATED: {c.created_at_i}</li>
              <li>TAGS: {c._tags.map((tag, i) =>
                <ol start={i + 1}>
                  <li>{tag}</li>
                </ol>
              )}</li>
              <li><a href={c.url}>webSite</a></li>
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  )
}