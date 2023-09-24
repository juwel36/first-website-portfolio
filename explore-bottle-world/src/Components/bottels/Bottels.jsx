import { useEffect, useState } from "react";
import Bottel from "../bottel/Bottel";
import './bottels.css'
import { addTols, getStoredCart, removefromLs } from "../../utilities/Localstore";
import Cart from "../cart/Cart";

const Bottels = () => {
const [bottles,setBottles]=useState([])
const [cart,setCart]=useState([])

useEffect(()=>{
fetch('bottels.json')
.then(res=> res.json())
.then(data=> setBottles(data))
} ,[])

// load card from local store
useEffect(()=>{
  console.log( bottles.length);
 if(bottles.length){
  const storedCart=getStoredCart();
  console.log(storedCart);

const saveCart=[]

for(const id of storedCart){

  const bottle=bottles.find(bottle=> bottle.id===id);
if(bottle){
saveCart.push(bottle)
}
}
console.log(saveCart);
setCart(saveCart)
 }
},[bottles])


const handleAddToCart=bottle=>{
const newProducts=[...cart,bottle]
setCart(newProducts)
// first
addTols(bottle.id)

}

const handleRemoveFromCart=id=>{
// visual remove
// loacl store remove
removefromLs(id)
}

  return (
    <div>
      <h3>Bottels Quantity:{bottles.length} </h3>
      {/* <cart cart={cart}></cart> */}
      <Cart cart={cart}
      handleRemoveFromCart={handleRemoveFromCart}
      ></Cart>
<div className="bottels">
{
  bottles.map(bottles=> <Bottel key={bottles.id}
    handleAddToCart={handleAddToCart}
  bottle={bottles} > </Bottel> )
}

</div>
    </div>
  );
};

export default Bottels;