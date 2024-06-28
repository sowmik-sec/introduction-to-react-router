import { useLoaderData } from "react-router-dom";

function PostDetails() {
  const post = useLoaderData();
  const { title, body } = post;
  console.log(post);
  return (
    <div>
      <h2>Details about {title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default PostDetails;
