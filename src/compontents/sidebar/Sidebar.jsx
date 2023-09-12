import Bookmark from "./Bookmark";

export default function Sidebar() {
	const cardStyle = "bg-custom-blue/[.1] px-12 py-5 rounded-lg";

	return (
		<div className="space-y-6">
			<div className={ `${cardStyle} text-center` }>
				<p className="text-2xl font-bold text-custom-blue">Spent time on read: </p>
			</div>

			<div className={ cardStyle }>
				<h2 className="mb-4 text-2xl font-bold">Bookmarked Blogs: </h2>
				<div className="space-y-4">
					<Bookmark></Bookmark>
				</div>
			</div>
		</div>
	)
}
