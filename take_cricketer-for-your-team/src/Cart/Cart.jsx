

const Cart = ({selectActor,remainig,totalCost}) => {


  return (
    <div className="w-1/3 ">
<div className="fixed">
<h1 className=" bg-pink-400 rounded-md text-white mt-24 ml-2 lg:ml-10">
  <span>Choice your </span>
  Actor Selected: {selectActor.length} </h1>
    
    <h1 className=" bg-cyan-700 text-white rounded-md my-2 ml-2">Total Cost : {totalCost} </h1>
<h1 className="ml-2 lg:ml-10  text-xs lg:text-xl mb-2"> Remaining Ballence : {remainig} </h1>


<div>
{
selectActor.map((actor,idx)=>(
<h1 key={idx} className="text-xs lg:text-xl  bg-slate-300 mb-2 p-2  ml-2 "> {actor.name} </h1>

)  )

}

</div>

</div>

    </div>
  );
};

export default Cart;