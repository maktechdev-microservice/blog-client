import React, { useState } from 'react'
import axios from "axios";

const CommentForm = ({postId}) => {
    const [content, setContent] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()
        const resp = await axios.post(`http://localhost:4001/posts/${postId}/comments`, {content})
        console.log(resp.status)
    }

  return (
      <div>
          
          <form action="" className="" onSubmit={handleSubmit}>
              <div className="form-group mb-3">
               <label htmlFor="content" className='form-label' >New Comment</label>
              <input type="text" onChange={ e => setContent(e.target.value) }  className='form-control' />
              </div> 
             <button className='btn btn-primary' type="submit">Submit</button>
          </form>
    </div>
  )
}

export default CommentForm