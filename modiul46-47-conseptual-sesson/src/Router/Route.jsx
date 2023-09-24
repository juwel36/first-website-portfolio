import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Components/ROot/Root";
import Home from "../Components/Home/Home";
import Fetures from "../Components/fetures/Fetures";
import Phone from "../Components/phone/Phone";
import Error from "../Components/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error> ,
    children:[
{
  path: '/',
element: <Home></Home>,
loader: () => fetch("Data.json")
},
{
path: "/fetures",
element: <Fetures></Fetures>
},
{
path:"/phones/:id",
element: <Phone></Phone>,
loader: () => fetch("../Data.json")

}


    ]
  },
]);

export default router;