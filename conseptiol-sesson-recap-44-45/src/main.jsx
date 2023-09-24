import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


import About from './Components/about/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Home from './Components/home/Home.jsx';
import Users from './Components/Users/Users.jsx';
import SeaDeatails from './Components/SeaDEtails/SeaDeatails.jsx';
import DashBord from './Components/Dashbord/DashBord.jsx';
import Juwel from './Components/juwel/Juwel.jsx';
import Messi from './Components/Messi/Messi.jsx';
import Ronaldo from './Components/ronaldo/Ronaldo.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:id',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <SeaDeatails></SeaDeatails>
      },
      {
        path: '/dashbord',
        element: <DashBord></DashBord>,
        children: [
          {
            path: '/dashbord/juwel',
            element: <Juwel></Juwel>
          },
          {
            path: '/dashbord/messi',
            element: <Messi></Messi>
          },
          {
            path: '/dashbord/ronaldo',
            element: <Ronaldo></Ronaldo>
          },



        ]
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
