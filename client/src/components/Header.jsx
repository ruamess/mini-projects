import { GoCommentDiscussion } from "react-icons/go";

const Header = () => {


	return (
		<div className="w-screen h-20 bg-white-ui dark:bg-dark-ui flex items-center justify-cente">
			<div className="w-screen flex flex-row max-w-screen-3xl justify-center items-center gap-7 pl-10 pr-10">
				<div className="border-white-acc dark:border-dark-acc hover:bg-white-acc dark:hover:bg-dark-acc transition flex items-center justify-center border min-w-14 h-14 rounded-full cursor-pointer">
					<GoCommentDiscussion fontSize={30} />
				</div>

				<div className="flex items-center w-[900px]">
					<input type="text" placeholder="Search for articles" className="border-white-acc border placeholder-black caret-black text-black dark:text-white dark:placeholder-white dark:bg-dark-ui dark:border-dark-acc dark:caret-white bg-opacity-20 h-12 pl-5 pr-5 focus:outline-none  container rounded-md " />
				</div>

				<div className="flex items-center">
					<button className="hover:bg-white-acc2 border-white-acc dark:border-dark-acc dark:hover:bg-dark-acc2 border p-2 rounded-md">
						Login
					</button>
				</div>

			</div>
		</div>
	)
}

export default Header