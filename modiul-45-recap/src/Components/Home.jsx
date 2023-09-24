import { Outlet, useNavigation } from "react-router-dom";
import Header from "./HEader/Header";
import Footer from "./Foter/Footer";


const Home = () => {

const navigation=useNavigation()

  return (
    <div>
      <h1 className=" border-b-4 pb-4 mb-2">This is HOme section</h1>
      <Header></Header>
      {
        navigation.state === "loading" ? <p> Loading.... </p>: <Outlet></Outlet>
      }
      <Footer></Footer>

    </div>
  );
};

export default Home;