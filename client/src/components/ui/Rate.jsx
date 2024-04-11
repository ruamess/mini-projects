import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Rate = () => {


	return (
		<div className="flex flex-row gap-2 items-center bg-acc2 w-fit p-1 pl-3 pr-3 rounded-md hover:bg-acc">
			<div className="hover:text-green-600 cursor-pointer">
				<FaArrowUp />
			</div>
			<div>
				<span>58</span>
			</div>
			<div className="hover:text-red-600 cursor-pointer">
				<FaArrowDown />
			</div>
		</div>
	)
}

export default Rate