import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

  const user = useLoaderData();
  const { name } = user;

  return (
    <div>
      <h1>Details about user <span className="text-green font-bold"> {name} </span> </h1>

    </div>
  );
};

export default UserDetails;