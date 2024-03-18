
// Функция смены имени, пока не доделал
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

// Если при фокусе на инпуте будет нажат Enter, отпрввится запрос

document.querySelector('input').addEventListener("keydown", (click) => {
	if (click.code == "Enter") {
		sendVideoLink()
	}
})

function renderDownloadVideoBlock(data) {
	document.querySelector('.video_image').setAttribute('src', data.thumbnail_url)
	document.querySelector('.video_title').innerHTML = data.video_title
	localStorage.setItem('video_title', data.video_title)
	document.querySelector('.video_duration').innerHTML = secondsToTime(data.video_length)
	document.querySelector('.download-video').classList.add('download-video_visible')
}

// Перевод секунд во время

function secondsToTime(seconds) {
	let hours = Math.floor(seconds / 3600)
	let minutes = Math.floor((seconds % 3600) / 60)
	let remainingSeconds = seconds % 60

	// Добавляем ведущий ноль, если минуты или секунды меньше 10
	hours = (hours < 10) ? "0" + hours : hours
	minutes = (minutes < 10) ? "0" + minutes : minutes
	remainingSeconds = (remainingSeconds < 10) ? "0" + remainingSeconds : remainingSeconds

	return hours + ":" + minutes + ":" + remainingSeconds
}


// Скрывает ловдер
function setLoaderHidden() {
	document.querySelector('.loader_hidden').classList.remove('loader_visible')
}
// Показывает лоадер
function setLoaderVisible() {
	document.querySelector('.loader_hidden').classList.add('loader_visible')
}



// Отправка запроса на скачивание видео

function sendDownloadRequest(permission) {

	fetch(`http://127.0.0.1:8000/download_video/?link=${localStorage.getItem('link')}&permission=${permission}`, {
		method: "POST"
	}).then(response => {
		if (!response.ok) {
			throw new Error("Ошибка HTTP: " + response.status)
		}
		return response.json()
	}).then(data => {
		console.log(data)
		if (data.status == "success") {
			getDownloadLink()
		}

	}).catch(error => {
		document.querySelector(".response").innerText = error

		console.error("Ошибка при выполнении запроса:", error)
	})
}



// Получение ссылки на загрузку видео

function getDownloadLink() {
	let video_title = localStorage.getItem("video_title").replace(/ /g, "%20")
	console.log(`http://127.0.0.1:8000/get_video_link/${video_title}.mp4`)
	window.location.href = `http://127.0.0.1:8000/get_video_link/${video_title}.mp4`
}



// Отправка запроса на получение данных о видео
function sendVideoLink() {

	document.querySelector(".response").innerText = ''
	setLoaderVisible()

	const link = document.querySelector("input").value

	localStorage.setItem('link', link)
	fetch(`http://127.0.0.1:8000/get_video_info/?url=${link}`, {
		method: "GET"
	})
		.then(response => {
			if (!response.ok) {
				throw new Error("Ошибка HTTP: " + response.status)
			}
			setLoaderHidden()
			return response.json()
		})
		.then(data => {
			console.log(data)
			setLoaderHidden()
			renderDownloadVideoBlock(data)

		})
		.catch(error => {
			setLoaderHidden()
			document.querySelector(".response").innerText = error
			console.error("Ошибка при выполнении запроса:", error)
		})
}