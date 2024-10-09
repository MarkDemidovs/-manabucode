import { useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Log() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5555/account/login', { username, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    console.log("The login was successful");
                    Cookies.set('auth', username, { expires: 1 });
                } else {
                    console.log(result.data); 
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="username"
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">
                    Log In
                </button>
            </form>
        </>
    );
}
