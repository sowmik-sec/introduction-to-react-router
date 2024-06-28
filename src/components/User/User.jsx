import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function User({ user }) {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "20px",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <Link to={`/users/${id}`}>Show Details</Link>
    </div>
  );
}

export default User;
