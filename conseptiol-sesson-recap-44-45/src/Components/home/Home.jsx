import React from 'react';
import Header from '../header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { BallTriangle } from  'react-loader-spinner'

const Home = () => {

const navigation =useNavigation();

  return (
    <div>
     

<Header></Header>


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




<Footer></Footer>

    </div>
  );
};

export default Home;