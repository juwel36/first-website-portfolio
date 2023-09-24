import { useState } from "react";
import './c.css'

const Country = ({country,handleVisitedCountry,handleVisitedFlag}) => {
  
  const {name,flags,population,area,cca3}=country

const[visited,setvisited]=useState(false)

const handleVisited=()=>{
setvisited(!visited)
}


  return (
    <div className={`border-2 border-green-500 p-5 mt-2 rounded-lg ${visited?'visited':'non-visited'}`}>
        <h2 className="font-bold mb-3"> Name: {name.common} </h2>
      <img className="w-24" id='photo' src={flags.png} alt="" />
<p>Population: {population} peoples</p>
<p>Area : {area}</p>
<p><small>Code:{cca3}</small></p>
<button  className="bg-green-400 p-1 rounded-lg" onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
 <br />

 <button  onClick={()=>handleVisitedFlag(country.flags.png)} className="bg-green-700 text-white p-1 rounded-lg">Visit Country</button>
<br />

<button style={{color: visited? 'black':'red'}} className="bg-green-200 p-1 rounded-lg" onClick={handleVisited}>{visited? 'visited':'I want to visit'}</button>
{visited && 'i have visited this country'}
    </div>
  );
};

export default Country;
