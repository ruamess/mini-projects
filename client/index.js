function setActiveLanguage(languge) {
	const en = document.querySelector('.language-switch').children[1]
	const ru = document.querySelector('.language-switch').children[0]
	if (languge == 'EN' && en.classList.value != 'language-active') {
		en.classList.add('language-active')
		ru.classList.remove('language-active')
	}
	else if (languge == 'RU' && ru.classList.value != 'language-active') {
		ru.classList.add('language-active')
		en.classList.remove('language-active')
	}
}


document.querySelector('input').addEventListener("keydown", (click) => {
	if (click.code == "Enter") {
		sendVideoLink()
	}
})



function setLoaderVisiblity() {
	let loader = document.getElementById("loader")
	let check = loader.style.display == 'block' ? 'none' : 'block'
	loader.style.display = check
}

function sendVideoLink() {

	document.querySelector(".response").innerText = ''
	setLoaderVisiblity()

	const link = document.querySelector("input").value
	fetch(`http://127.0.0.1:8000/download_video/?link=${link}&permission=720p`, {
		method: "POST"
	})
		.then(response => {
			if (!response.ok) {
				throw new Error("Ошибка HTTP: " + response.status);
			}
			setLoaderVisiblity()
			return response.json();
		})
		.then(data => {
			setLoaderVisiblity()
			console.log(data);
		})
		.catch(error => {
			setLoaderVisiblity()
			document.querySelector(".response").innerText = error

			console.error("Ошибка при выполнении запроса:", error);
		});
}