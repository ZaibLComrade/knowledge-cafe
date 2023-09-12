import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Blog( { content } ) {
	const { title, cover, author_img, author, posted_date, reading_time, hashtags } = content;
	return (
		<div>
			{/* Cover Image */}
			<div>
				<img src={ cover } alt=""/>
			</div>
			
			{/* Author */}	
			<div>
				<img src={ author_img } alt=""/>	
				<p>{ author }</p>
				<p>{ posted_date }</p>
			</div>
			
			{/* Others */}
			<div>
				<p>{ reading_time }</p>	
				<div><FaBookmark/></div>
			</div>
			
			<div>
				{hashtags.map((tag, idx) => <p key={idx}>#{tag}</p>)}
			</div>
		</div>	
	)
}

Blog.propTypes = {
	content: PropTypes.object.isRequired	
}
