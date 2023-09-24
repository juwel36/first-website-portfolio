import { useEffect, useState } from "react";
import Cart from "../../Components/cart/Cart";


const Fabourites = () => {
const [fabourite,setfabourite]=useState([])
const [noFound,setNoFound]=useState(false)
const [isshow,setisShow]=useState(false)

useEffect(()=>{

const fabouriteItems=JSON.parse(localStorage.getItem('fabourite'))
if(fabouriteItems){
setfabourite(fabouriteItems)

}else{
setNoFound('No Found Data')

}

},[])



const handledeleteall =()=>{
localStorage.clear()
setfabourite([])
setNoFound('No Found Data')

}


  return (
    <div>
     
{
  noFound ? <p className='text-6xl font-bold  flex justify-center items-center h-[80vh]'> {noFound} </p> :

  <div>

{
fabourite.length > 0 && <div className="flex justify-center my-10">
<button onClick={handledeleteall}
className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
data-ripple-light="true"
>
Delete All
</button>
</div>

}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{
  isshow ? fabourite.map(item=> <Cart key={item.id} item={item} ></Cart> ) :
  fabourite.slice(0,2).map(item=> <Cart key={item.id} item={item} ></Cart> )
}
</div>


{
fabourite.length > 2 && <div className="flex justify-center mt-16">
  <button onClick={()=> setisShow(!isshow) }
  className="flex select-none items-center gap-3 rounded-lg border border-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  type="button"
  data-ripple-dark="true"
>
{isshow?"see less" : "see more" }
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    aria-hidden="true"
    class="h-5 w-5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
    ></path>
  </svg>
</button>
  
</div>

}

  </div>


}



     
    </div>
  );
};

export default Fabourites;