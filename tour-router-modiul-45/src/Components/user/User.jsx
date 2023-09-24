import { Link } from "react-router-dom";


const User = ({user}) => {
  const {name,email,phone,id}=user;
  return (
    <div>
      <div className="bg-green-800 text-white mb-4 p-6 rounded-xl mt-5">
<h1> {name} </h1>
<p className="text-xs"> Email:{email} </p>
<p> Phone: {phone} </p>
<Link to={`/user/${id}`}>Show details</Link>
<Link to={`/user/${id}`} > <p className="bg-teal-800 p-2 rounded-lg">Details</p> </Link>
      </div>

    </div>
  );
};

export default User;