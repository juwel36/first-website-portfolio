import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/about/About.jsx';
import Users from './Components/users/Users.jsx';
import UserDEtails from './Components/userDetails/UserDEtails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
{
path: "/contact",
element: <Contact></Contact>
},
{
path: '/about',
element: <About></About>
},
{
path: '/users',
loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
element : <Users></Users>
},
{
path: '/user/:userId',
loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)   ,
element: <UserDEtails></UserDEtails>

}




    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
