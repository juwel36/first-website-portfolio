import Feature from "../../Components/Feature/Feature";


const PriceOption = ({ option }) => {
  const {price,features,name}=option;
  return (
    <div className="flex">
      <div className="bg-blue-600 text-center flex flex-col  text-white p-16 m-4">
        <h2>
          <span className="text-7xl font-extrabold">{price} </span>
          <span className="text-xl">/mon</span>
        </h2>
<h1 className="text-3xl my-5">
  {name}
</h1>

<div className="p-3 flex-grow">
{ features.map((feture,idx)=> <Feature key={idx} feature={feture} ></Feature> ) }
</div>
<button className="bg-green-700 px-16 py-2 mt-12"> Buy Now </button>
      </div>


    </div>
  );
};

export default PriceOption;