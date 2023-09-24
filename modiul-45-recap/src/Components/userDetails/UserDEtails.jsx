import { useLoaderData, useNavigate } from "react-router-dom";


const UserDEtails = () => {
  const data=useLoaderData();
  const navigate=useNavigate()
  const {name,email,phone}=data;

  const handleGoBack = ()=>{
navigate(-1)

  }

  return (
    <div>
      <h1> {name} </h1>
      <p> {email} </p>
      <h3> {phone} </h3>
      <button onClick={handleGoBack}> Go Back </button>
    </div>
  );
};

export default UserDEtails;