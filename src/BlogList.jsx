export default function BlogList({ blogs, title, deletBlog }) {
    return (
        <div>
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className='display-blog' key={blog.id}>
                    <h3>{blog.name}</h3>
                    <p>{blog.text}</p>
                    <button onClick={() => deletBlog(blog.id)}>Remove</button>
                </div>
            ))}
        </div>
    )
}  