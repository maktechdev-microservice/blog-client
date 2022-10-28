import React, { useEffect, useState } from 'react'
import axios from "axios"
import Post from "./Post"

const PostList = () => {
    const [posts, setPosts] = useState({})

    const getPosts = async () => {
        const resp = await axios.get('http://localhost:4000/posts')
        setPosts(resp.data);
        return resp.status
    }

    useEffect(() => {
        getPosts()
    }, [])

    const renderedPosts = Object.values(posts)

  return (
      <>         
        <h2>Blogs</h2>
        <div className="d-flex flex-row flex-wrap justify-content-start gap-2">
          {
            renderedPosts.map(({ id, title, body }) => <Post key={id} id={id} title={title} body={body} />)
          }
        </div>
    </>
  )
}

export default PostList