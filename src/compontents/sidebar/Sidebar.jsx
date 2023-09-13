import PropTypes from "prop-types"
import Bookmark from "./Bookmark";

export default function Sidebar({ blogContent, bookmark }) {
	const cardStyle = "bg-custom-blue/[.1] px-12 py-5 rounded-lg";
	const readingTime = blogContent.reduce((acc, currVal) => acc + currVal.reading_time, 0);
	const bookmarkContent = bookmark.map((elem, idx) => <Bookmark key={ idx } content={ elem }></Bookmark>);
	
	return (
		<div className="space-y-6">
			<div className={ `${cardStyle} text-center` }>
				<p className="text-2xl font-bold text-custom-blue">Spent time on read: { readingTime } mins</p>
			</div>
			
			<div className={ cardStyle }>
				<h2 className="mb-4 text-2xl font-bold">Bookmarked Blogs: </h2>
				<div className="space-y-4">{ bookmarkContent }</div>
			</div>
		</div>
	)
}

Sidebar.propTypes = {
	blogContent: PropTypes.array.isRequired,
	bookmark: PropTypes.array.isRequired
}
