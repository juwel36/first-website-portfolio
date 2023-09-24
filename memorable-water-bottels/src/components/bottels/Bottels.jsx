
import './bottels.css'
import { useEffect } from "react";
import { useState } from "react";
import Bottel from "../bottel/Bottel";
import { addTols, getStoreCart,removeFromLS } from '../../utilities/Localstorage';
import Card from '../card/Card';


const Bottels = () => {

const [bottels,setBottels]=useState([])
const [cart,setCart]=useState([])

useEffect(()=>{
fetch('bottels.json')
.then(res=>res.json())
.then(data=>setBottels(data))
},[])

useEffect(()=>{
if(bottels.length){
  const storedCart= getStoreCart();
console.log(storedCart);
const saveCart=[];
for (const id of storedCart){
const bottle=bottels.find(bottel=> bottel.id===id);
if(bottle){
  saveCart.push(bottle)
}
}
setCart(saveCart)
}
} ,[bottels])

const handleRemoveFromCart = (id) => {
  const remainingCart = cart.filter((bottle) => bottle.id !== id);
  setCart(remainingCart);
  removeFromLS(id);
};

const handleAddtoCart=bottle=>{
const newProducts=[...cart,bottle]
setCart(newProducts)
addTols(bottle.id)
}


  return (
    <div>
      
<h3>Bottels Here : {bottels.length} </h3>

<Card cart={cart} handleRemoveFromCart={handleRemoveFromCart} ></Card>
<div className="bottels">
{
bottels.map(bottel=> <Bottel key={bottel.div}
  handleAddtoCart={handleAddtoCart}
  bottel={bottel}></Bottel> )

}
</div>

    </div>
  );
};

export default Bottels;