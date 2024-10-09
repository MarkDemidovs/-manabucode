import { useState } from "react"
import axios from 'axios';

export default function Sign() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5555/account/sign`, {username, password}).then(result=>console.log(result)).catch(err=>console.log(err))

    }

	return (<>
    <form onSubmit={handleSubmit}>
		<input type="text" placeholder="username" autoComplete="off" onChange={(e) => setUsername(e.target.value)}/>
		<input type="password" placeholder="password" autoComplete="off" onChange={(e) => setPassword(e.target.value)}/>

        <button type="submit">
            Register
        </button>
    </form>
	</>)
}
