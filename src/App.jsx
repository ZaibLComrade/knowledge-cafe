import { useState, useEffect } from 'react'
import Blogs from './compontents/blogs/Blogs'
import Header from './compontents/header/Header'
import Sidebar from './compontents/sidebar/Sidebar'

function App() {
	const [bookmark, setBookmark] = useState([]);
	const [content, setContent] = useState([]);
	
	function handleBookmark(content) {
		setBookmark([...bookmark, content.title]);
	}
	
	useEffect(() => {
		fetch('../public/blogData.json')
			.then(response => response.json())
			.then(resource => setContent(resource))
	}, [])
	
	return (
	<div className="container mx-auto">
		<Header></Header>
		<div className="grid grid-cols-3 gap-6">
			<Blogs blogContent={ content } handleBookmark={ handleBookmark }></Blogs>
			<Sidebar blogContent={ content } bookmark={ bookmark }></Sidebar>
		</div>
	</div>
	)
}

export default App
