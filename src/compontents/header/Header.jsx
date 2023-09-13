import profile from '../../assets/profile.png'
export default function Header() {
	return (
		<>
			<div className="flex justify-between px-4 pt-10">
				<div>
					<h1 className="text-custom-black text-[40px] font-bold">Knowledge Cafe</h1>
				</div>
				<div className="rounded-[50px]">
					<img src={ profile }/>
				</div>
			</div>
			<hr className="my-8"/>
		</>
	)	
}
