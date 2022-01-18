import {useEffect, useState} from "react"
import {  useDispatch } from "react-redux"


/**
 * request post mock datas user
 * @param {string} token 
 * @const {object} data - contain datas of user
 */
export default function Profile(token) {

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

    }).then(response => response.json()
    ).then((data) => {
        setData(data)
        dispatch({type: "DATAS_ACTIONS", payload:{datasUser: data}})

    }).catch(error=> 
        console.log(error.message))

    }, [])

    return {data}

}