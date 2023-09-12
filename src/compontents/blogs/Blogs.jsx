import Blog from './Blog.jsx'
import { useEffect, useState } from 'react'

export default function Blogs() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch('../../../public/blogData.json')
			.then(response => response.json())
			.then(resource => setBlogs(resource))
	}, [])	

	return (
		<>
		{
			blogs.map(blog => <Blog key={ blog.id } content={ blog }></Blog>)			
		}
		</>)
}
