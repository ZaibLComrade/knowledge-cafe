import './App.css'
import Blogs from './compontents/blogs/Blogs'
import Header from './compontents/header/Header'

function App() {
  return (
    <div className="container mx-auto">
		<Header></Header>
		<div className="grid grid-cols-3">
			<Blogs></Blogs>
		</div>
    </div>
  )
}

export default App
