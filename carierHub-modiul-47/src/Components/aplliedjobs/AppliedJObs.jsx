import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorege";


const AppliedJObs = () => {

  const [applyedjob, setapplyedjob] = useState([])
  const [displayJObs,setDisplayJObs]=useState([])
  const jobs = useLoaderData();

  const handleJObsFIlter = filter => {

if(filter=== 'all'){
  setDisplayJObs(applyedjob)
}
else if (filter === 'remote') {
const remoteJobs = applyedjob.filter ( job => job.remote_or_onsite === 'Remote')
setDisplayJObs(remoteJobs)
}
else if (filter === 'onsite'){
const onsiteJobs = applyedjob.filter(job=> job.remote_or_onsite === 'Onsite' )
setDisplayJObs(onsiteJobs)
}

  }

  useEffect(() => {
    const storedjobids = getStoredJobApplication();
    if (jobs.length > 0) {
      //       const jobsapplied = jobs.filter(job => storedjobids.includes(job.id))
      // console.log(jobsapplied);
      const jobsapplied = []
      for (const id of storedjobids) {
        const job = jobs.find(job => job.id === id);
        if (job) {
          jobsapplied.push(job)
        }

      }
      setapplyedjob(jobsapplied)
      setDisplayJObs(jobsapplied)
    }
  }, [jobs])


  return (
    <div>
      <p >Job  I  applied {applyedjob.length} </p>


      <details className="dropdown mb-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={()=> handleJObsFIlter('all')}><a>All</a></li>
          <li onClick={()=> handleJObsFIlter('remote')}><a>Remote</a></li>
          <li onClick={()=> handleJObsFIlter('onsite')}><a>onsite</a></li>
        </ul>
      </details>


      <ul>
        {
          displayJObs.map(job => <li key={job.id}> <span>{job.job_title} ....{job.company_name} ...{job.remote_or_onsite} </span> </li>)
        }

      </ul>

    </div>
  );
};

export default AppliedJObs;