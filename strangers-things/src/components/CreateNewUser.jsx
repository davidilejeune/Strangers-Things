import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';

export default function CreateNewUser({ setToken }){

const cohort = '2306-FTB-ET-WEB-FT' 
const baseUrl = `https://strangers-things.herokuapp.com/api/${cohort}`

const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');
// const [email,setEmail] = useState('');
const [errorMsg, setErrorMsg] = useState('');
const navigate = useNavigate()

async function handleSubmit(e){
    e.preventDefault()
    console.log('Thank you for your submission!')
    try {

    if (errorMsg){
        //don't submit the form
        console.log('Did not submit the data')
        return
    }

    const response = await fetch(`${baseUrl}/users/register}`,
    {
        method: 'POST',
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            user: {
            userName, password
            }
        })
    })

console.log('Sent successfully!')
const data = await response.json()

console.log('Result:', data)

setToken(data.token)
navigate('/profile')
// setUserName('')
// setPassword('')

} catch(error){
    console.error(error)
}
}

return (
    <>
    <h2>Create Account</h2>
 
        <div className="authFormContainer">
          <h3>Registration Form</h3>
          <form className="registerForm" onSubmit={handleSubmit}>
            <label>User Name
            <input value={userName} onChange={(e) => setUserName(e.target.value)} type="username" placeholder="user name" />
            </label>
            <label>Password
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" />
            </label>
            <button type="submit" value="Submit">Register User</button>
          </form>
          <NavLink to='/user'><button>If you already have an account, login here!</button></NavLink>
        </div>
    </>
    )
}