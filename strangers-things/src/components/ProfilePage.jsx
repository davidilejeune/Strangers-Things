import React from "react";
import { useState, useEffect } from "react";

export default function ProfilePage({token}) {

    const cohort = '2306-FTB-ET-WEB-FT'; 
    const baseUrl = `https://strangers-things.herokuapp.com/api/${cohort}`;

    const [ message, setMessage ] = useState('')
    const [ username, setUserName ] = useState({})

    useEffect(() => {
        
        async function fetchUser() {

            let response = await fetch(`${baseUrl}/users/me`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
            })

            let result = await response.json()

            console.log(result)
            setMessage(result.message)
            setUserName(result.username)
            
        }

        if (token.length !== 0) {
            fetchUser() 
        }
    }, [token])



    console.log('Token:', token)

    return (
        <div className="profile">
        <h1>{message}</h1>
        <h3>Hello:</h3>
            <h4>{username.username}</h4>
        </div>
    )
}
