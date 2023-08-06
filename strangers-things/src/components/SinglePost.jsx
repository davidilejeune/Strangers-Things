import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function SinglePost() {
    
    const [ onePost, setOnePost ] = useState({})
    const { name } = useParams()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const data = await response.json()

            setOnePost(postData(data))
        }
        fetchData()

        console.log('Use Effect')
    }, [])


    function postData(data) {
        const types = data.types.map(val => val.type.name)
        const img = data.sprites.other['official-artwork'].front_default

        return  {
            name: data.name,
            id: data.id,
            img, 
            types
        }
    }

    console.log(onePost) 
    return <div className='thisPost'>
        <h1>{onePost.title}</h1>
        <h3>{onePost.description}</h3>
        <ul>{
            onePost.posts &&
            onePost.types.map((type, index) => <li key={index}>{type}</li>)
        }</ul>

        <Link to='/PostsPage'><button>Go Back</button></Link>
    </div>
}

export default SinglePokemon