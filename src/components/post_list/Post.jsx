import CommentList from "../comment_list/CommentList"
import CommentForm from "../create_comment/CommentForm"


const Post = ({ id, title, body }) => {
  return (
      <div key={id} className="card" style={{ width: "32%", marginBottom: "20px" }} >
          <div className="card-body">
            <h3 className="">{title}</h3>
            <p className="">{body}</p>
            <hr />
            <CommentList postId={id} />
            <hr />
            <CommentForm postId={ id }/>
          </div>
         
      </div>
  )
}


export default Post