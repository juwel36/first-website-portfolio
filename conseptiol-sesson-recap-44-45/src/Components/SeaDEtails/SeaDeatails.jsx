import { useLoaderData, useNavigate } from "react-router-dom";


const SeaDeatails = () => {

  const data=useLoaderData();
  const {name,email,phone}=data;
const navigate=useNavigate()

const handleGoBack =()=>{
navigate(-1)

}

  return (
    <div>
      <h1> name {name}  </h1>
      <p> {email} </p>
      <h3> {phone} </h3>
      <button onClick={handleGoBack} className="bg-teal-800 p-2 rounded-lg mt-2" >Go back</button>
    </div>
  );
};

export default SeaDeatails;