import { useState } from "react"

export default function Player () {
const [team,setteam]=useState(11)


const add=()=>{
  setteam(team+1)
}
const remove=()=>{
  setteam(team-1)
}
const reset =()=>{
  setteam(11)
}

  const style={
border:'2px solid pink',
padding:'10px',marginBottom:'10px'
  }

return(
<div style={style}>
<h3>Player: {team}</h3>
<button onClick={add}>Add</button>
<button onClick={remove}>Remove</button>
<button onClick={reset}>Reset</button>
</div>

)



}