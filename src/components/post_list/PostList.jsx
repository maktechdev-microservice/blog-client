import React, { useEffect, useState } from 'react'
import axios from "axios";

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
      <div >
          
        <h2>Blogs</h2>
        <div className="d-flex flex-row flex-wrap justify-content-between">
          {
              renderedPosts.map(({ id, title, body }) => <div key={id} className="card" style={{ width: "33%" }} >
                  <div className="card-body"><h3 className="">{title}</h3>
                      <p className="">{ body }</p>
                  </div></div>)
          }
        </div>
    </div>
  )
}

export default PostList