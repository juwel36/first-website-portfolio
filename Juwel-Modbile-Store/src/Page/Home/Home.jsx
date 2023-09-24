import React, { useEffect } from 'react';
import picture from "../../assets/pic.jpg";
import Phones from '../../Components/Phones/Phones';
import { useLoaderData } from 'react-router-dom';

import Lottie from 'lottie-web';
import animationData from '../../../public/animation.json'; // 



const Home = () => {
  

  const lottieContainer = React.useRef(null);
  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      autoplay: true,
      animationData: animationData,
    });

    // Stop the animation when the component unmounts
    return () => {
      anim.destroy();
    };
  }, []);


const Phone=useLoaderData()

  return (
    <div >
 <div className='flex ' ref={lottieContainer} ></div>



     <div className="relative text-center">
  <img className="w-full my-9 h-[60vh] rounded-xl" src={picture} alt="" />
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
    <p className="text-3xl font-bold">Get Ready for the Holidays with  <h1 className="text-3xl font-bold shadow-2xl" > <span className="text-[#186dee]">J</span> <span className="text-[#db4733]">u</span> <span className="text-[#ffc118]">w</span> <span className="text-[#186dee] shadow-2xl">e</span> <span className="text-[#009955]">L</span>
          <span className="text-xs font-thin pl-3">store</span>
          </h1></p>
  </div>
</div>



<div>

<Phones phone={Phone}></Phones>

</div>


    </div>
  );
};

export default Home;