import Comment from "./Comment"

const CommentList = ({ comments }) => {
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