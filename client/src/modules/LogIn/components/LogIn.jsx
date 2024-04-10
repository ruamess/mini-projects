import { useState } from "react"
import { sendSignIn, sendLogIn } from "../api"


const LogIn = () => {

	const [authType, setAuthType] = useState(true)
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')


	const changeAuthType = () => {
		if (authType == true) {
			setAuthType(false)
		}
		else if (authType == false) {
			setAuthType(true)
		}
		setUsername('')
		setEmail('')
		setPassword('')
		setRepeatPassword('')
	}


	return (
		<div className="bg-ui w-[450px] h-[600px] flex flex-col items-center justify-center rounded-md p-10 sm:p-20 m-2">
			<div>
				{authType ? <span className="text-5xl">Login in</span> : <span className="text-5xl">Sign in</span>}
			</div>

			{authType ?
				<div className="flex flex-col gap-7 mt-14 w-full">
					<input placeholder="Email" type="text" className="bg-acc2 pl-4 pr-4 h-12 hover:bg-acc focus:bg-acc focus:outline-none rounded-md container" value={email} onChange={(e) => setEmail(e.target.value)} />
					<input placeholder="Password" type="password" className="bg-acc2 pl-4 pr-4 h-12 hover:bg-acc focus:bg-acc focus:outline-none rounded-md container" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
				</div>
				:
				<div className="flex flex-col gap-7 mt-14 w-full">
					<input placeholder="Username" type="text" className="bg-acc2 pl-4 pr-4 h-12 hover:bg-acc focus:bg-acc focus:outline-none rounded-md container" value={username} onChange={(e) => setUsername(e.target.value)} />
					<input placeholder="Email" type="text" className="bg-acc2 pl-4 pr-4 h-12 hover:bg-acc focus:bg-acc focus:outline-none rounded-md container" value={email} onChange={(e) => setEmail(e.target.value)} />
					<input placeholder="Password" type="password" className="bg-acc2 pl-4 pr-4 h-12 hover:bg-acc focus:bg-acc focus:outline-none rounded-md container" value={password} onChange={(e) => setPassword(e.target.value)} />
					<input placeholder="Repeat password" type="password" className="bg-acc2 pl-4 pr-4 h-12 hover:bg-acc focus:bg-acc focus:outline-none rounded-md container" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
				</div>}


			<div className="flex items-center mt-5 mb-5 ">
				{authType == true ? <span className="cursor-pointer" onClick={() => changeAuthType()}>Firstly in site?</span> : <span className="cursor-pointer" onClick={() => changeAuthType()}>Have account?</span>}
			</div>

			<div className="mt-auto container">
				<button onClick={
					authType ? () => sendLogIn(email, password)
						: () => sendSignIn(username, email, password, repeatPassword)
				} className="bg-acc2 hover:bg-acc rounded-md container h-14">
					Continue
				</button>
			</div>

		</div>
	)
}

export default LogIn