import {
  createBrowserRouter,
} from "react-router-dom"
import Root from "../Page/Root/Root";
import Home from "../Page/Home/Home";
import LogIn from "../Page/Login/LogIn";
import Fabourites from "../Page/Fabourites/Fabourites";
import SeeDetails from "../Components/seeDetails/SeeDetails";
import EroorElement from "../Components/Error/EroorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement:<EroorElement></EroorElement>,
    children: [
{
path: "/",
element:<Home></Home>,
loader: ()=> fetch('/Data.json')
},
{
path:"/favorites",
element: <Fabourites></Fabourites> 
},
{
path:'/login',
element:<LogIn></LogIn> 
},
{
path: '/seeDetails/:id',
element:<SeeDetails></SeeDetails>,
loader: ()=> fetch('../Data.json')
}


    ]
  },
]);


export default router ;