import { useState } from "react"

export default function Counter(){
const [count,setCount]=useState(0);

const handleAdd=()=>{
const newCount=count+1;
setCount(newCount)
}

const handleRedius=()=>{
  const rediusCount=count-1;
  setCount(rediusCount)
}

const reset=()=>{
const resetCount=0;
setCount(resetCount)
}

return(
<div style={{border:'2px solid tomato'}}>

<h3>counter:{count}</h3>
<button onClick={handleAdd}>add</button>
<button onClick={handleRedius}>Redius</button>
<button onClick={reset}>Reset</button>
</div>

)
// local host link : http://localhost:5173/

}