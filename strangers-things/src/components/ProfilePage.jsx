import React from "react";
import { useState, useEffect } from "react";

export default function ProfilePage({ token }) {

    const [ message, setMessage ] = useState('')
    const [ user, setUser ] = useState({})
    
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
            setUser(result.user)
            
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
            <h4>{user.username}</h4>
        </div>
    )
}
