import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import Phones from "../Phones/Phones";

const Home = () => {
const phone=useLoaderData()

  return (
    <div>
    
      <Banner></Banner>
<Phones phone={phone} ></Phones>
    </div>
  );
};

export default Home;