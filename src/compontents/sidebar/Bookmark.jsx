import PropTypes from 'prop-types'

export default function Bookmark({ content }) {
	return (
		<div className="p-5 text-lg font-semibold bg-white rounded-lg">
			<p>{ content }</p>
		</div>
	)
}

Bookmark.propTypes = {
	content: PropTypes.string,
}
