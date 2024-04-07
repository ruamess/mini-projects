import { useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";

const ThemeSwithcer = () => {

	const [theme, setTheme] = useState(localStorage.getItem('theme'))

	function toggleDarkMode() {
		const html = document.documentElement;
		if (html.classList.contains('dark')) {
			html.classList.remove('dark')
			localStorage.theme = 'light'
			setTheme('light')
		} else {
			html.classList.add('dark')
			localStorage.theme = 'dark'
			setTheme('dark')
		}
	}

	return (
		<div className=" hover:text-white-acc dark:hover:text-dark-acc ml-5 flex items-center justify-center cursor-pointer
		" onClick={() => toggleDarkMode()}>
			{theme == 'dark' ? <IoMdMoon fontSize={23} /> : <IoIosSunny fontSize={25} />}
		</div>
	)
}

export default ThemeSwithcer