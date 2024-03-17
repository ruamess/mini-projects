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


function sendVideoLink() {
	const link = document.querySelector("input").value
	console.log(link)
	fetch(`http://127.0.0.1:8000/download_video/?link=${link}&permission=720p`, {
		method: "POST"
	})
		.then(response => {
			// Проверка статуса ответа
			if (!response.ok) {
				throw new Error("Ошибка HTTP: " + response.status);
			}
			// Преобразование ответа в JSON
			return response.json();
		})
		.then(data => {
			// Обработка данных из ответа
			console.log(data);
		})
		.catch(error => {
			// Обработка ошибок
			console.error("Ошибка при выполнении запроса:", error);
		});
}