import { useState } from "react";

export default function Count(){

  const [count,setCount]=useState(0);

function Handleadd (){
  setCount(count+1)
}

function Redius(){
  setCount(count-1)
}
function Reset(){
  setCount(0)
}

return (
<div>
<h4>Alhamdulilah</h4>
<p>{count}</p>
<button onClick={Handleadd}>Add</button>
<button onClick={Redius}>Remove</button>
<button onClick={Reset}>Reset</button>

</div>

)



}