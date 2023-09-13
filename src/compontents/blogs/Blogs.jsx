import PropTypes from 'prop-types'
import Blog from './Blog.jsx'

export default function Blogs({ blogContent, handleBookmark }) {
	return (
			<div className="col-span-2">
				{blogContent.map(blog => <Blog 
				key={ blog.id }
				content={ blog }
				handleBookmark={ handleBookmark }
				></Blog>)}
			</div>
	)
}

Blogs.propTypes = {
	blogContent: PropTypes.array.isRequired,
	handleBookmark: PropTypes.func.isRequired
}
