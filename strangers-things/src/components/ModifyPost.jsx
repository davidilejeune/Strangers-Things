import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function ModifyPost() {
    
    const cohort = '2306-FTB-ET-WEB-FT'; 
    const baseUrl = `https://strangers-things.herokuapp.com/api/${cohort}`;

    const updatePost = async (token) => {
        try {
          // You will need to insert a variable into the fetch template literal 
          // in order to make the POST_ID dynamic. 
          // 5e8d1bd48829fb0017d2233b is just for demonstration.
          const response = await fetch(`${baseUrl}/posts/${token}`, {
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
      }

      const deletePost = async () => {
        try {
          const response = await fetch(`${baseUrl}/posts/${token}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            }
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      }

    return (
    <>
        updatePost()
        deletePost()
    </>
    )
}

