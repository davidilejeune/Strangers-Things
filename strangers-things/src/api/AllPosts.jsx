export async function fetchPosts() {
    try {
      const response = await fetch(`${baseURL}/posts`)
      const data = await response.json()
  
      return data
    } catch (err) {
      console.log('An error occurred while fetching Posts:', err)
    }
  }

  return (
    <div></div>
  )