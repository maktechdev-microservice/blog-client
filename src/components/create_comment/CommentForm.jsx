import React, { useState } from 'react'
import axios from "axios";

const CommentForm = ({ postId }) => {
    const url = `http://localhost:4001/posts/${postId}/comments`
    const [content, setContent] = useState('')
    const handleSubmit = async (event) => {
      event.preventDefault()
      let resp;
      if (content !== '') {
        resp = await axios.post(url, { content })
        setContent('')
      }
      
     
      return resp.status || ''
    }

  return (
      <div>
          
          <form action="" className="" onSubmit={handleSubmit}>
              <div className="form-group mb-3">
               <label htmlFor="content" className='form-label' >New Comment</label>
              <input type="text" onChange={ e => setContent(e.target.value) }  className='form-control' value={content} />
              </div> 
             <button className='btn btn-primary' type="submit">Submit</button>
          </form>
    </div>
  )
}

export default CommentForm