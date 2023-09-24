

const Card = ({selectActor,remainig,totalCost}) => {

  return (
    <div className="">
<h1>Remaing Ballence: {remainig} </h1>
<h1>Total Cost: {totalCost} </h1>
      <h1 className=" text-3xl ">Total Actors :{selectActor.length} </h1>
<div className=" text-white ml-2 ">
{
  selectActor.map((actor,idx) => (
    <h1 key={idx} className="mb-2  bg-slate-500 mt-2 p-2">{actor.name}</h1>
    
    ))
}
</div>
    </div>
  );
};

export default Card;