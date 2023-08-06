import { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import HomePage from './components/HomePage'
import EveryPost from './components/PostsPage'
import ProfilePage from './components/ProfilePage'
import UserLogin from './components/UserLogin'
import CreateNewUser from './components/CreateNewUser'
import CreateNewPosts from './components/CreateNewPosts'
import './App.css'


function App() {
    
    const cohort = '2306-FTB-ET-WEB-FT'; 
    const baseUrl = `https://strangers-things.herokuapp.com/api/${cohort}`;

    const [ token, setToken ] = useState('');
    console.log(token)

  return (
    <>

    <nav id='navbar'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/posts'>Posts</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/user'>Login</NavLink>
    </nav>


    <div className='bodySpace'>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/posts' element={<EveryPost token={token}/>} />
        <Route path='/makepost' element={<CreateNewPosts token={token}/>} />
        <Route path='/profile' element={<ProfilePage token={token}/>} />
        <Route path='/user' element={<UserLogin token={token}/>} />
        <Route path='/newUser' element={<CreateNewUser setToken={setToken}/>} />
    </Routes>
    </div>

   
    </>
  )
}

export default App
