import profile from '../../assets/profile.png'
export default function Header() {
	return (
		<>
			<div className="flex justify-between">
				<div>
					<h1 className="text-custom-black text-[40px] font-bold">Knowledge Cafe</h1>
				</div>
				{/*<div className="border-2 w-max">*/}
					<img src={profile} alt=""/>
				{/*</div>*/}
			</div>
			<hr/>
		</>
	)	
}
