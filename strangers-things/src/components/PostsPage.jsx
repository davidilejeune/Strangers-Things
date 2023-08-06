import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
    
export default function EveryPost({ token }) {

  const postContainer = document.getElementById('postArea');
  const cohort = '2306-FTB-ET-WEB-FT'; 
  const baseUrl = `https://strangers-things.herokuapp.com/api/${cohort}`;

  const [ allPosts, setAllPosts ] = useState([]);
  const navigate = useNavigate();

const fetchPosts = async () => {
  try {
    const response = await fetch(`${baseUrl}/posts`)

    const result = await response.json();
    console.log(result);
    return result.data
  } catch (err) {
    console.error(err);
  }
  fetchPosts()


const renderPosts = async () => {
  try {
    const response = await fetchPosts()
    let postContainer = ''
    response.data.post.forEach((post) => {
      postContainer.innerHTML =
      `<h2>Item: ${post.title}</h2>
      <h2>Description: ${post.description}</h2>
      <h2>Price: ${post.price}</h2>
      <h2>Location: ${post.location}</h2>
      <h2>Will Deliver?: ${post.willDeliver}</h2>`
    });
  }catch (err) {
    console.error('Could not retrieve posts')
  }
  renderPosts()
}
}

return (
  <>
  <h2>User Listings</h2>

  <NavLink to='/makepost'><button>Make A Post</button></NavLink>
  <div className='postArea'>
  
  </div> 

  </>
)
}