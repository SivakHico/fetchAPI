import { useEffect, useState } from 'react'
import BlogList from './BlogList'
import './App.css'

export default function App() {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/blogs')
      .then(res => { return res.json() })
      .then(data => setBlogs(data))
  }, [])

  return (
    <div className="App">
      <div className="card">
        {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
      </div>
    </div>
  )
}