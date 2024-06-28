import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

function Posts() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h2>Posts: {posts.length}</h2>
      <div className="users">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
