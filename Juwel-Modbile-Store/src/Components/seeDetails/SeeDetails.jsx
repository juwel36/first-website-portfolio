import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SinglePhone from "../SinglePhone/SinglePhone";
// import Phones from "../Phones/Phones";


const SeeDetails = () => {

const [phone,setPhone]=useState({})
const {id}=useParams()
const phones=useLoaderData()

useEffect(()=>{

const seePhone=phones.find(phoneitem=> phoneitem.id === id )

setPhone(seePhone)
},[id,phones])

console.log(id,phone);


  return (
    <div>
      
<div>

<SinglePhone phone={phone} ></SinglePhone>

</div>

    </div>
  );
};

export default SeeDetails;