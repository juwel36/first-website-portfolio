import { Outlet } from "react-router-dom";
import Header from "../header/Header";


const Home = () => {
  return (
    <div className="text-center
    ">

      <h1 className="mb-5">Hello I,am from Home</h1>
<Header></Header>

      <Outlet></Outlet>

    </div>
  );
};

export default Home;