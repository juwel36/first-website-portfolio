// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";


const Main = () => {
const [player,setplayer]=useState([])
const[selectActor,setSelectActor]=useState([])
const [remainig,setremainig]=useState(0)
const [totalCost,setTotalCost]=useState(0)

useEffect(()=>{
fetch('Public.json')
.then(res=>res.json())
.then(data=>setplayer(data))

},[])

const handleSelectActor = actor =>{

const isExist=selectActor.find((item)=> item.id == actor.id )
let count=actor.salary;

if(isExist){
 return alert('already booked')
}else{

  selectActor.forEach(item=>{
count=count+item.salary;

  })
  
  const totalRemaining=20000-count;

if(count>20000){
return alert ('ar tk nai')
}else{
  setTotalCost(count)
  setremainig(totalRemaining)

  const newSelect=[...selectActor,actor]
  setSelectActor(newSelect)
}

 
}
}


  return (
// main div
<div className="flex">
<div className="w-2/3">
<div className=" ">
      <h1 className=" text-3xl ">Player : {player.length} </h1>
<div className="grid grid-cols-3 gap-4">
{
player.map((player,idx)=>(
  <div className=" " key={idx}>

 <div className=" p-10 rounded-lg border-2 border-cyan-500">
    <img className="rounded-full ml-3" src={player.image} alt="" />
    <h1 className="text-  pt-2 font-bold">{player.name}</h1>
<div className=" justify-between px-2">
<h1>{player.role} </h1>
<h1>Selary: {player.salary}</h1>
</div>

<button onClick={()=> handleSelectActor(player)} className="ml-10 mt-5 bg-pink-600 text-white p-1 rounded-lg">Select</button>
  </div>
 </div>


))

}
</div>
    </div>
</div>

{/* cart div */}
<div>
<Card selectActor={selectActor}
remainig={remainig}
totalCost={totalCost}
>  </Card>

</div>




   </div>


  )
};

export default Main;