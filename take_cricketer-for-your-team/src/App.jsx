
import { useState } from 'react'
import './App.css'
import Cart from './Cart/Cart'
import Header from './Header/Header'
import Home from './Home/Home'

function App() {
 const[selectActor,setSelectActor]=useState([])
const[remainig,setremaing]=useState(20000)
const [totalCost,setTotalCost]=useState(0)


 const handleAddtoCart=actor=>{
const isExist= selectActor.find((item)=> item.id ==actor.id )

let count=actor.salary;


if(isExist){
  return alert('Alreadey Selected')
}else{

selectActor.forEach((item)=>{
count+=item.salary;
})

const TotalRemaing=20000-count;


if(count>20000){
  return alert('ar tk nai bro')
}else{

setremaing(TotalRemaing)

}

  const newAvtor=[...selectActor,actor]
  setSelectActor(newAvtor)
setTotalCost(count)


}


 }

  return (
    <>
    <Header></Header>
     
     <div className=' flex '>
     <Home handleAddtoCart={handleAddtoCart}></Home>
      <Cart selectActor={selectActor} remainig={remainig}  totalCost={totalCost} ></Cart>
     </div>

    </>
  )
}

export default App
