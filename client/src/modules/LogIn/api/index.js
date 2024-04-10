import axios from "axios";

export const API_URL = "http://127.0.0.1:8000/auth/"

const api = axios.create({
	withCredentials: true,
	baseURL: API_URL
})


api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})

const sendSignIn = (username, email, password, re_password) => {
	const data = {
		"username": username,
		"email": email,
		"password": password,
		"re_password": re_password
	}
	api.post("/users/", data)
}

const sendLogIn = (email, password) => {
	const data = {
		"password": email,
		"email": password
	}
	api.post("/token/login/", data)
}



export {
	sendLogIn,
	sendSignIn
}