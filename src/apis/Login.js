// import {useEffect, useState} from "react"
// // console.log('hheehooo')
// import { useSelector, useDispatch } from "react-redux"



// export default function Login(e) {
//     e.preventDefault()
//     // const dispatch = useDispatch()
//     console.log('form')

//         fetch('http://localhost:3001/api/v1/user/login', {
//         method: "POST",
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin":"*"
//         },
//         body: JSON.stringify({
//             email: document.getElementById('username').value,
//             password: document.getElementById('password').value
//         })
//     }).then(response => response.json()
//     ).then((data) => {
//         console.log(data.body.token)
//     }).catch(error=> 
//         console.log(error.message))
// }

