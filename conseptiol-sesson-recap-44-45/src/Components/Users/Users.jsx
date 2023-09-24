import { useLoaderData } from "react-router-dom";
import User from "../user/User";

const Users = () => {

  const users= useLoaderData();
// console.log(users.products);

  return (
    <div>
      <h1>hi users: {users.length}  </h1>

<div className="grid grid-cols-3 gap-4">
{
  users.map((user,idx)=> <User key={idx} user={user} > </User> )
}
</div>

    </div>
  );
};

export default Users;