import React, {useState} from 'react'
import axios from "axios"


const PostForm = () => {
    
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const resp = await axios.post('http://localhost:4000/posts', { title, body })  
        console.log(resp); 
    }
    
    return (
        <React.StrictMode>
        <>
       <h2>New Blog</h2>
      <form onSubmit={handleSubmit}>
          <fieldset className='mb-3'>
              <label htmlFor="title" className='form-label'>Title</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} className='form-control form-control-lg' />
              <label htmlFor="body" className='form-label'>body</label>
              <textarea value={body} onChange={ e => setBody(e.target.value)}  className='form-control form-control-lg' />
          </fieldset>
          <button className='btn btn-primary' type="submit">Submit</button>
                </form>
                </>
        </React.StrictMode>
  )
}

export default PostForm