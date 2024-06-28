import { useLoaderData, useNavigate, useParams } from "react-router-dom";

function PostDetails() {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { postId } = useParams();
  const { title, body } = post;
  console.log(postId);
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Details about {title}</h2>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
}

export default PostDetails;
