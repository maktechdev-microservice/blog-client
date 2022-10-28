import React,  {useState, useEffect } from 'react'
import axios from 'axios'
import Comment from "./Comment"

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([])

    const getComments = async () => {
        const url = `http://localhost:4001/posts/${postId}/comments`
        console.log(url);
        const resp = await axios.get(url)
        console.log(resp.data)
        console.log(typeof comments)
        setComments(resp.data)
        return resp.status
    }

    useEffect(() => {
        getComments()
    }, [])
    
    

  return (
      <div>
          <h3 className="">Comments</h3>
          <ul>
              {
                  comments.map(({ content, id }) => <Comment key={id} content={ content } /> )
              }
          </ul>       
    </div>
  )
}

export default CommentList