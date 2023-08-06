import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
    
export default function EveryPost({ token }) {

  const cohort = '2306-FTB-ET-WEB-FT'; 
  const baseUrl = `https://strangers-things.herokuapp.com/api/${cohort}`;

  const [ allPosts, setAllPosts ] = useState([]);
  const navigate = useNavigate();

const fetchPosts = async () => {
  try {
    const response = await fetch(`${baseUrl}/posts`)

    const data = await response.json();
    console.log(result);
    return data
  } catch (err) {
    console.error(err);
  }
  fetchPosts()
}

return (
  <>
  <h2>User Listings</h2>
    fetchPosts()

  </>
)
}