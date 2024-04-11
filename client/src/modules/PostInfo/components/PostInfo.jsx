
import { FaRegMessage } from "react-icons/fa6"
import User from "./User";
import Title from "./Title";
import Text from "./Text";
import TagList from "./TagList";
import Rate from "../../../components/ui/Rate";
import ShareButton from "./ShareButton";

const PostInfo = () => {


	const tags = [
		{
			id: 1,
			text: 'aaaaaa'
		},
		{
			id: 2,
			text: 'aaa123aaa'
		},
		{
			id: 3,
			text: 'aaaa132aa'
		},
	]

	return (
		<div className="flex  justify-center flex-col gap-2 w-screen sm:w-[800px] pl-4 pr-4 mt-5 mb-5 ">
			<User />

			<div className="flex flex-col gap-3">
				<Title />

				<TagList list={tags} />

				<Text text={"For financial reason I can't get myself a full PC so I decided to buy a PC without a dedicated gpu and if I have the money later I will get myself a gpu Will I not be limiting my gpu or anything else I do that ? I am new to building a PC so I don't know if it's okay I am going with something like this : SPIDER II Ryzen 5600G/512GB SSD/16GB/Radeon Vega7"} />
				<div className="flex justify-center bg-acc2 bg-opacity-60">
					<img src="./1.jpg" className="max-w-80" />
				</div>

				<div className="mt-5 flex flex-row items-center gap-5">
					<Rate />

					<div className="flex flex-row justify-center items-center gap-2 bg-acc2 w-fit p-1 pl-3 pr-3 rounded-md hover:bg-acc cursor-pointer">
						<span>
							<FaRegMessage />
						</span>
						<span>
							100
						</span>
					</div>

					<ShareButton />

				</div>

			</div>
		</div>
	)
}

export default PostInfo