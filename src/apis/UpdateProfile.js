import {useEffect, useState} from "react"
import {  useDispatch } from "react-redux"


/**
 * request post mock datas user
 * @param {string} token 
 * @const {object} data - contain datas of user
 */
export default function UpdateProfile(token) {

    const [data, setData] = useState({});
    const dispatch = useDispatch()


    useEffect(()=> {
        fetch('http://localhost:3001/api/v1/user/profile', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
            "Authorization": "Bearer" + token
        },
        body: {
            firstname: document.getElementById('firstname-form-edit').value,
            lastname: document.getElementById('lastname-form-edit').value
        }

    }).then(response => response.json()
    ).then((data) => {
        setData(data)
        dispatch({type: "DATAS_ACTIONS", payload:{token: data}})

    }).catch(error=> 
        console.log(error.message))

    }, [])

    return {data}

}