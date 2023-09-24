import Phone from "./Phone";

const Phones = ({phone}) => {


  return (
    <div>

<h1 className="text-3xl my-5 text-center underline" >All Phones</h1>
     
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
{
  phone?.map((phoneItem,idx)=> <Phone key={idx} phone={phoneItem} > </Phone>  )
}

</div>

      
    </div>
  );
};

export default Phones;