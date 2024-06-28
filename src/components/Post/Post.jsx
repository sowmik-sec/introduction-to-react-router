import { Link, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Post({ post }) {
  const { id, title } = post;
  const navigate = useNavigate();
  const postStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "20px",
  };

  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={postStyle}>
      <h4>Post of Id: {id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
      <button onClick={handleShowDetails}>Click to see details</button>
    </div>
  );
}

export default Post;
