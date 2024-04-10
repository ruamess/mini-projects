

const Header = () => {


	return (
		<div className="w-screen h-16 bg-ui flex items-center justify-cente">
			<div className="w-screen flex flex-row max-w-screen-3xl justify-center items-center gap-7 pl-10 pr-10">
				<div className="flex items-center justify-center">
					<img src="./Logo.svg" className="min-w-12 cursor-pointer" />
				</div>

				<div className="flex items-center w-[900px]">
					<input type="text" placeholder="Search for articles" className="bg-acc2 placeholder-whit text-white h-10 pl-5 pr-5 hover:bg-acc focus:outline-none container rounded-md " />
				</div>

				<div className="flex items-center">
					<button className="hover:bg-acc bg-acc2 h-10 w-16 rounded-md"  >
						Login
					</button>
				</div>

			</div>
		</div>
	)
}

export default Header