import { useNavigate } from "react-router-dom";


const User = ({ user }) => {

  const { name, email, phone, id } = user;
  const navigate = useNavigate()

  const handleshowDetail = () => {
    navigate(`/user/${id}`)
  }


  return (
    <div>

      <div className="bg-pink-600 text-white mb-4 p-6 rounded-xl mt-5">
        <h1> {name} </h1>
        <p className="text-xs"> Email:{email} </p>
        <p> Phone: {phone} </p>
        {/* <Link to={`/user/${id}`}>Sea details</Link> */}
        <button className="text-black" onClick={handleshowDetail}>Click to see details</button>
      </div>

    </div>
  );
};

export default User;