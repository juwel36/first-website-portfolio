import { useLoaderData } from "react-router-dom";
import User from "../user/User";


const Users = () => {
const users=useLoaderData();

  return (
    <div>
      <h1>bodro Users length {users.length}</h1>

      <div className="grid grid-cols-3 gap-5">
      {
        users.map((user,idx)=> <User key={idx} user={user} ></User> )
      }
      </div>
      
    </div>
  );
};

export default Users;