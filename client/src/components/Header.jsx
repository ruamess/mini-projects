
const Header = () => {


	return (
		<div className="w-screen h-20 bg-sky-blue flex items-center justify-center">
			<div className="w-screen flex flex-row max-w-screen-3xl justify-center gap-7 pl-10 pr-10">
				<div className="flex items-center">
					<img src="/Logo.svg" />
				</div>

				<div className="flex items-center w-4/5 ">
					<input type="text" placeholder="Search for articles" className="h-10 bg-white bg-opacity-20 placeholder-white text-white pl-5 pr-5 focus:outline-none  container rounded-md  " />
				</div>

				<div className="flex items-center">
					<button>
						Login
					</button>
				</div>

			</div>
		</div>
	)
}

export default Header