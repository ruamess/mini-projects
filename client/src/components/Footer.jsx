import ThemeSwithcer from "./ThemeSwithcer"


const Footer = () => {


	return (
		<footer className="bg-white-ui dark:bg-dark-ui h-20 py-4 flex items-center">
			<div className="container mx-auto flex flex-row items-center justify-center">
				<p>© 2024 - RuamDays </p>
				<ThemeSwithcer />
			</div>
		</footer>
	)
}

export default Footer