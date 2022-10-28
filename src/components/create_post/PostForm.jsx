import React, {useState} from 'react'
import axios from "axios"


const PostForm = () => {
    
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const url = 'http://localhost:4000/posts'
    const handleSubmit = async (event) => {
        event.preventDefault()

        let resp = ''
        if (body === '' || title === '') {
            resp = ''
        }
            
        else {
            resp = await axios.post(url, { title, body })
            
            setBody('')
            setTitle('')
        }
        
        return resp
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