import { useEffect, useState } from "react";
import JOb from "../job/JOb";


const FeaturedList = () => {

const [data,setData]=useState([])
const [datalength,setdatalength]=useState(4)


useEffect(()=>{
fetch('jobs.json')
.then(res=> res.json())
.then(data=> setData(data))

} ,[])

  return (
   <div>
 <div className='text-center my-6'>
      <h1 className="text-3xl">Featured Jobs {data.length} </h1>
<p>Explore thousands of job opportunities with all the information you need. Its your future</p>

    </div>

<div className="grid grid-cols-2 gap-5">
{
  data.slice(0,datalength).map(job=> <JOb key={job.id} job={job}></JOb> )
}

</div>
<div className={ datalength=== data.length && 'hidden' }>
  <button onClick={()=> setdatalength(data.length)} className='btn btn-primary'>show All </button>
</div>

   </div>
  );
};

export default FeaturedList;