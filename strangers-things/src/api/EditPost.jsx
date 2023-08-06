const updatePost = async () => {
    try {
      // You will need to insert a variable into the fetch template literal 
      // in order to make the POST_ID dynamic. 
      // 5e8d1bd48829fb0017d2233b is just for demonstration.
        const response = await fetch(`${BASE_URL}/posts/${postID}`, {
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

    

    return (
        <>

        
        </>
    )

