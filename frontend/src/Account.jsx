import Cookies from 'js-cookie'
import { useEffect } from 'react';

function logout() {
    console.log("logged out");
    Cookies.remove('auth');
    
}

export default function Account() {
    const isAuthenticated = () => {
        return Cookies.get('auth') !== undefined;
    };
    useEffect(() => {
        if (isAuthenticated()) {
            console.log("User is authenticated");
        } else {
            console.log("Account not found!");
        }
    }, []);
    return (
        <>
 {!isAuthenticated() && (
                <>
                    <p>Account not found!</p>
                    <button><a href="/account/log">Log In</a></button>
                    <button><a href="/account/sign">Sign Up</a></button>
                </>
            )}
            {isAuthenticated() && <>
            <p>Welcome back!</p>
            <button onClick={logout}>Log Out</button>
            <p>Refresh the page after logging out.</p>
            </>}
        </>
    )
}
