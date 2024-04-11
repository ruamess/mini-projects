import { RiFlag2Line } from "react-icons/ri";

const User = () => {


	return (
		<div className="flex flex-row items-center justify-between">
			<div className="flex flex-row items-center gap-2">
				<div>
					<img src="./Jojo.svg" className="max-w-8" />
				</div>
				<div>
					<span>Name</span>
				</div>
				<div>
					<span>2 hours ago</span>
				</div>
			</div>
			<div className="cursor-pointer hover:text-red-700">
				<RiFlag2Line />
			</div>
		</div>
	)
}

export default User