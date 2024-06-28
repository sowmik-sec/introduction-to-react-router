import { useLoaderData } from "react-router-dom";

function UserDetails() {
  const userDetails = useLoaderData();
  //   console.log(userDetails);
  const { name, website } = userDetails;
  return (
    <div>
      <h2>{name}</h2>
      <p>{website}</p>
    </div>
  );
}

export default UserDetails;
