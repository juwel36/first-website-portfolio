import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
  const data = useLoaderData();

  const { name, username, email } = data;
  return (
    <div>
      <h2>Details about user : </h2>
      <div>
      <p>{name} </p>
      <h2>{username} </h2>
      <p>{email} </p>
      </div>
    </div>
  );
};

export default UserDetail;