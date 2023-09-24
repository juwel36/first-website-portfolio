
import axios from "axios";
import { useEffect, useState } from "react";

import { BallTriangle} from  'react-loader-spinner'

const Loaddata = () => {
  const [author, setauthor] = useState([])
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(data =>{
         setauthor(data.data)
         setLoading(false);
        })

  }, [])

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(data => {
  //       setauthor(data.data);
  //       setLoading(false); 
  //     })
    
  // }, [])
  return (
    <div>
      
      <div>
        <p className="text-4xl">bangladesh</p>
        { loading &&
         <div className=" absolute left-96  ">
           <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
         </div>
        }
        <div className="grid grid-cols-4 gap-3 ">
          {
            author.map(author => (
              <div key={author.id} className="bg-teal-800 mb-2 mt-4  text-white p-12 rounded-lg ">
                <h2 className="text-2xl font-semibold" > Name : {author.name} </h2>
                <h1> Email : {author.email} </h1>
                <p>
                  Address: {`${author.address.street}, ${author.address.suite}, ${author.address.city}, ${author.address.zipcode}`}
                </p>
              </div>

            ))
          }
        </div>

      </div>

    </div>
  );
};

export default Loaddata;