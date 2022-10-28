
import './App.css';
import PostForm from './components/create_post/PostForm';
import PostList from './components/post_list/PostList';

function App() {
  return (
    <div className="container">
      <h1>Blog Client</h1>
      <hr />
      <PostForm />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
