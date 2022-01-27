import {  useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

/**
 * @return form sign
 * @func handleSubmit - runs when the form is sent and retrieves the token, saves it in localstorage and redirects to the user page
 */
function SignInForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/api/v1/user/login', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body: JSON.stringify({
                email: document.getElementById('username').value,
                password: document.getElementById('password').value
            })
        }).then(response => response.json()
        ).then((data) => {
            dispatch({type: "IS_LOGGED_ACTION", payload:{token: data.body.token}})
            localStorage.setItem('token', data.body.token)
            navigate("/user")

        }).catch(error=> {
            console.log(error.message)
            navigate("/signin")
            alert("Erreur de saisie")
        })
    }
    return (
        <form id="form-signIn" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username"/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me" >Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
        </form>
    )
}

export default SignInForm