import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Blog( { content, handleBookmark } ) {
	const { title, cover, author_img, author, posted_date, id, reading_time, hashtags } = content;
	return (
		<div className="pb-10 mb-10 border-b text-custom-black">
			{/* Cover Image */}
			<div className="mb-8">
				<img className="w-full h-full rounded-lg" src={ cover } alt=""/>
			</div>
			
			<div className="flex justify-between mb-4">
				{/* Author */}	
				<div className="flex items-center gap-4">
					<div className="shrink-0">
						<img className="h-14 w-14 rounded-[50px]" src={ author_img } alt=""/>	
					</div>
					
					<div>
						<p className="text-2xl font-bold">{ author }</p>
						<p className="font-semibold text-custom-grey">{ posted_date }</p>
					</div>
				</div>
				
				{/* Others */}
				<div className="flex items-center gap-2">
					<p className="text-xl font-medium text-custom-grey">{ reading_time } min read</p>	
					<div className="text-2xl" onClick={() => handleBookmark(content)}><FaBookmark/></div>
				</div>
			</div>
			
			<div className="mb-4">
				<h1 className="text-[40px] font-bold leading-[64px]">{ title }</h1>
			</div>
			
			<div className="flex mb-5 text-xl font-medium text-custom-grey gap-4">
				{hashtags.map((tag, idx) => <p key={idx}>#{tag}</p>)}
			</div>
			
			<div>
				<p className="text-xl font-semibold underline cursor-pointer w-max hover:text-custom-blue-hover text-custom-blue">Mark as read</p>
			</div>
		</div>	
	)
}

Blog.propTypes = {
	content: PropTypes.object.isRequired,
	handleBookmark: PropTypes.func.isRequired
}
