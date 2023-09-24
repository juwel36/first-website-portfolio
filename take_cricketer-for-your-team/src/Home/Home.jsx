import { useEffect, useState } from "react";


const Home = ({handleAddtoCart}) => {

const [addActor,setAddactor]=useState([])

useEffect(()=>{
fetch('Public.json')
.then(res=> res.json())
.then(data=>setAddactor(data))
} ,[])

  return (
    <div className="w-2/3">
      <div>
<h1>Actor Length : {addActor.length} </h1>
<div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
{
  addActor.map((actor,idx)=>(
<div key={idx}>

<div  class="card  lg:h-[500px]  mt-10 bg-base-100 shadow-xl">
  <figure class=" pt-10">
    <img className="h-36 p-10" src={actor.image} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class=" items-center text-center">
    <h2 class="py-2 text-lg font-semibold">{actor.name}</h2>
   <div className="flex justify-between  my-4 ">
    <p className=" ">{actor.role}</p>
    <p className="text-sm"> Salary:{actor.salary}$ </p>
   </div>
    <div class="card-actions flex justify-center ">
      <button  onClick={()=> handleAddtoCart(actor)}  class="btn btn-primary ">Select</button>
    </div>
  </div>
</div>



</div>


  )  )
}
</div>



      </div>

    </div>
  );
};

export default Home;