import axios from "axios";
import { toast } from 'sonner'
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
		.then(response => {
			toast(response)
		})
		.catch(error => {
			if (error.response.data.email) {
				toast(error.response.data.email[0])
			}
			else if (error.response.data.username) {
				toast(error.response.data.username[0])
			}
			else if (error.response.data.password) {
				toast(error.response.data.password[0])
			}

		})
}

const sendLogIn = (email, password) => {
	const data = {
		"password": password,
		"email": email
	}
	console.log(data)
	api.post("/token/login/", data)
		.then(response => {
			console.log("Ответ сервера:", response.data);
		})
		.catch(error => {
			if (error.response.data.non_field_errors) {
				toast(error.response.data.non_field_errors[0])
			}
			else if (error.response.data.password) {
				toast(error.response.data.password[0])
			}
		});
}



export {
	sendLogIn,
	sendSignIn
}