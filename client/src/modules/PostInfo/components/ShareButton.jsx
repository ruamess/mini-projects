import { BiArrowToTop } from "react-icons/bi"

const ShareButton = () => {


	return (
		<button className="flex flex-row justify-center items-center gap-2 bg-acc2 w-fit p-1 pl-3 pr-3 rounded-md hover:bg-acc cursor-pointer">
			<span>
				<BiArrowToTop />
			</span>
			<span>Share</span>
		</button>
	)
}

export default ShareButton