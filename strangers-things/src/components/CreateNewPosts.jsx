import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function CreateNewPosts({token}) {

    const cohort = '2306-FTB-ET-WEB-FT'; 
    const baseUrl = `https://strangers-things.herokuapp.com/api/${cohort}`;
    const [ item, setItem] = useState('')
    const [ description, setDescription] = useState('')
    const [ price, setPrice] = useState('')
    const [ location, setLocation] = useState('')
    const [ willDeliver, setwillDeliver] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        
        try {
    
        if (errorMsg){
            console.log('Did not submit the data')
            return
        }
    
        const response = await fetch(`${baseUrl}/posts`,
        {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json", 
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    price: price,
                    location: location,
                    willDeliver: willDeliver
                }
            })         
        })
        console.log('Sent successfully!')
        const result = await response.json()

        
        console.log('Result:', result.data.token)
        
        navigate('/post')
        console.log('Your post has been submitted!')

    }  catch (err){
        console.error('Post was not submitted')
        alert('You must be logged in to submit a post')
    }
    }

    return (
        <>
        <h2>Create Post</h2>
 
        <div className="authFormContainer">
          <h3>Registration Form</h3>
          <form className="registerForm" onSubmit={handleSubmit}>
            <label>Item
            <input value={item} onChange={(e) => setItem(e.target.value)} type="item" placeholder="Item Name" />
            </label>
            <label>Description
            <input value={description} onChange={(e) => setDescription(e.target.value)} type="description" placeholder="Item Description" />
            </label>
            <label>Price
            <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" />
            </label>
            <label>Location
            <input value={location} onChange={(e) => setLocation(e.target.value)} type="location" placeholder="Location" />
            </label>
            <label>Will Deliver?
            <input value={willDeliver} onChange={(e) => setwillDeliver(e.target.value)} type="checkbox" />
            </label>
            <button type="submit" value="Submit">Submit Post</button>
          </form>
        </div>
        </>
    )
}