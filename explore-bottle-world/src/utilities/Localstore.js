const getStoredCart=()=>{
const storedCartString = localStorage.getItem('cart');
if(storedCartString){
  return JSON.parse(storedCartString)
}
return[]
}

const saveCartTols=cart=>{
const cartStringified=JSON.stringify(cart);
localStorage.setItem('cart',cartStringified)
}

const addTols=id=>{
const cart=getStoredCart();
cart.push(id)
saveCartTols(cart)
} 

const removefromLs=id=>{
  const cart=getStoredCart();
  // removing every id
const remaining=cart.filter(idx=> idx !== id)
saveCartTols(remaining)

}

export {addTols,getStoredCart,removefromLs}
// 2nd step to add getStoredCart