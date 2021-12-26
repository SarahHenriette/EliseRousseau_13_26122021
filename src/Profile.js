import {useEffect, useState} from "react"
// console.log('hheehooo')

export default function Profile(token) {

    const [data, setData] = useState({});

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
        // console.log(data.body.token)
        setData(data)
    }).catch(error=> 
        console.log(error.message))

    }, [])

    return {data}

}