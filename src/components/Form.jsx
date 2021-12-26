import {  useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

function Form() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    //a l'envoi du form
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form')
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
            console.log(data.body.token)
            dispatch({type: "IS_TOKEN_ACTION", payload:{token: data.body.token}})
            navigate("/user")
        }).catch(error=> {
            console.log(error.message)
            navigate("/signin")
            alert(error.message)
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

export default Form