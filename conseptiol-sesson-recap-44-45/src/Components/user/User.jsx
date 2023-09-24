import { Navigate, useNavigate } from "react-router-dom";


const User = ({ user }) => {

  const { name, email, phone, id } = user;
  const navigate =useNavigate();

const handleshowDetail =()=> {
  navigate(`/user/${id}`)
}


  console.log(user);
  return (
    <div>

<div>
<div>
<div className="bg-pink-600 text-white mb-4 p-6 rounded-xl mt-5">
        <h1> {name} </h1>
        <p className="text-xs"> Email:{email} </p>
        <p> Phone: {phone} </p>
      <button onClick={handleshowDetail} className="bg-teal-800 p-2 rounded-lg mt-2">More Details</button>
       
      </div>
</div>



</div>



    </div>
  );
};

export default User;