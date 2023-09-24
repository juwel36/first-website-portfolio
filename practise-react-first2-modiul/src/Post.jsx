import { useEffect, useState } from "react"
import Data from "./Data";

export default function Post (){
  const [Post,setCount]=useState([]);

  useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>setCount(data))
  },[])

return(
<div>
<h4>Post Quantity :{Post.length} </h4>
{
  Post.map(d=><Data data={d} ></Data>)
}
</div>
)

}