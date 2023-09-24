import React from 'react';
import { NavLink, Outlet, useNavigation } from 'react-router-dom';
import { BallTriangle } from  'react-loader-spinner'

const DashBord = () => {

const navigation=useNavigation();

  return (
    <div>
     
<div className='flex'>
<div className='bg-pink-700 w-[20%] p-5 text-white ' >
<div className='flex flex-col'>
    <NavLink className='bg-slate-800 p-2 mb-4 rounded-lg' to="/dashbord/juwel">Juwel</NavLink>
    <NavLink className='bg-slate-800 p-2 mb-4 rounded-lg' to="/dashbord/messi">Leo messi</NavLink>
    <NavLink className='bg-slate-800 p-2 mb-4 rounded-lg' to="/dashbord/ronaldo">C Ronaldo</NavLink>

  </div>
</div>

<div className='w-[80%]'>
  
{
  navigation.state === "loading" ? <div className='flex justify-center items-center'><BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/></div> : <Outlet></Outlet>
}

</div>


</div>

      
    </div>
  );
};

export default DashBord;