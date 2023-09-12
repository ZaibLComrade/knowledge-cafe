import './App.css'
import Blogs from './compontents/blogs/Blogs'
import Header from './compontents/header/Header'
import Sidebar from './compontents/sidebar/Sidebar'

function App() {
  return (
    <div className="container mx-auto">
		<Header></Header>
		<div className="grid grid-cols-3 gap-6">
			<Blogs></Blogs>
			<Sidebar></Sidebar>
		</div>
    </div>
  )
}

export default App
