import { useState } from "react";
import {  NavLink } from 'react-router-dom';

export default function UserLogin( { token } ){

    const cohort = '2306-FTB-ET-WEB-FT' 
    const baseUrl = `https://strangers-things.herokuapp.com/api/${cohort}`

    const [ successMessage, setSuccessMessage] = useState(null)
    const [ error, setError ] = useState(null)  
    const [ userName, setUserName ] = useState("")
    const [ password,setPassword ] =useState("")

    async function tryLogin(){
        
        try{
            const response = await fetch(`${baseUrl}/users/login`,
            {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                  "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                  user: {
                    username: userName,
                    password: password
                  }
                })
              });
              const result = await response.json();
              console.log(result);
              setSuccessMessage(result.message);
            } catch (error) {
              setError(error.message);
            }
          }



return (
    <>
        <div>
            <h2>Enter User Name and Password</h2>
            { (successMessage) ? <p>{successMessage}</p> : <></>}


            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}

          <form className="loginForm" onSubmit={tryLogin}>
            <label>User Name
            <input value={userName} onChange={(e) => setUserName(e.target.value)} type="username" placeholder="user name" />
            </label>
            <label>Password
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" />
            </label>
            <button type="submit" value="Submit">Log In</button>
          </form>
          <NavLink to='/newUser'><button>Don't have an account? Register here!</button></NavLink>   
        </div>

        <div>
          
        </div>
    </>
    )
}

