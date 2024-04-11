import { NavLink } from "react-router-dom"

const Header = () => {


	return (
		<div className="w-screen h-16 bg-ui flex justify-between">
			<div className="w-screen flex flex-row max-w-screen-3xl justify-center items-center gap-5">
				<div className="flex items-center justify-center pl-5">
					<img src="./Logo.svg" className="min-w-12 cursor-pointer" />
				</div>

				<div className="flex items-center w-[900px]">
					<input type="text" placeholder="Search for articles" className="bg-acc2 placeholder-whit text-white h-10 pl-5 pr-5 hover:bg-acc focus:outline-none container rounded-md " />
				</div>

				<div className="flex items-center pr-5">
					<NavLink to={'/auth'} className="hover:bg-acc bg-acc2 h-10 w-16 rounded-md flex justify-center items-center"  >
						Login
					</NavLink>
				</div>
			</div >
		</div >
	)
}

export default Header