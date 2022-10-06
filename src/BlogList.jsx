export default function BlogList({ blogs, title }) {
    return (
        <div>
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className='display-blog' key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.author}</p>
                </div>
            ))}
        </div>
    )
}  