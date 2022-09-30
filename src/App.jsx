import { useEffect, useState } from 'react'
import BlogList from './BlogList'
import './App.css'

export default function App() {
  const [blogs, setBlogs] = useState([
    { id: 1, name: 'Sevo', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 2, name: 'Moris', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { id: 3, name: 'Sevo', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' }])

  const [comment, setComment] = useState([])
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search?query=car')
      .then((res) => res.json())
      .then((obj) => setComment(obj.hits))
  }, [])

  const searchFor = (e) => {
    setSearch(e.target.value)
  }

  const deletBlog = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  return (
    <div className="App">
      <BlogList blogs={blogs} title='All Blogs' deletBlog={deletBlog} />
      <BlogList blogs={blogs.filter(blog => blog.name === 'Sevo')} title='Sevo Blogs' />
      <hr />
      <h1>Fetch Data From Api</h1>
      <div>
        <input onChange={searchFor} value={search} type="text" placeholder='Search for what ...' />
        <span>{search}</span>
      </div>
      <PassengersList />
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