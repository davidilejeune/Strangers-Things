import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import MessageUser from './MessageUser';

export default function EveryPost() {

  const cohort = '2306-FTB-ET-WEB-FT'; 
  const baseUrl = `https://strangers-things.herokuapp.com/api/${cohort}`;
  const [ allPosts, setAllPosts ] = useState([]);

    const fetchPosts = async () => {
      try {
        const response = await fetch(`${baseUrl}/posts`)
    
        const result = await response.json();
        console.log(result);
        setAllPosts = (result.data)
      } catch (err) {
        console.error('Did not get posts');
      }
      useEffect(() => {

        fetchPosts()
    
      }, [])
      
      const updatePost = async ({token}) => {
        try {
          const response = await fetch(`${baseUrl}/posts/${POST_ID}`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              post: {
                title: title,
                description: description,
                price: price,
                location: location,
                willDeliver: null
              }
            })
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
        updatePost()
      }

      const deletePost = async ({token}) => {
        try {
          const response = await fetch(`${baseUrl}/posts/${POST_ID}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
          alert('Must be logged in to delete')
        }
        deletePost()
      }
    // const renderPosts = async () => {
    //   try {
    //     const response = await fetchPosts()
    //     let postContainer = document.createElement('div');
    //     response.data.post.forEach((post) => {
    //       postContainer.innerText =
    //       `<h2>Item: ${post.title}</h2>
    //       <h2>Description: ${post.description}</h2>
    //       <h2>Price: ${post.price}</h2>
    //       <h2>Location: ${post.location}</h2>
    //       <h2>Will Deliver?: ${post.willDeliver}</h2>`
    //     });
    //   }catch (err) {
    //     console.error('Could not retrieve posts')
    //   }
    //   renderPosts()
    //   postContainer.appendChild(updatePost)
    //   postContainer.appendChild(deletePost)
    // }
  
  
};



return (
  <>
  <NavLink to='/makepost'><button>Make A Post</button></NavLink>

  <h2>User Listings</h2>
  
  <div>

      {allPosts.length > 0 && (

        <ul>

          {allPosts.map(posts => (

            <li key={posts.posts}>{posts.item}{posts.description}{posts.price}{posts.location}{posts.willDeliver}</li>

          ))}

        </ul>

      )}

    </div>

  

  </>
)
}
