import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Roots/Root';
import HOme from './Components/home/HOme';
import Error from './Components/error/Error';
import AppliedJObs from './Components/aplliedjobs/AppliedJObs';
import JObdetails from './Components/jobdetails/JObdetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <Error></Error>,
    children: [
{
path:'/',
element:<HOme></HOme>
},
{
  path: '/applied',
  element: <AppliedJObs></AppliedJObs>,
  loader: ()=> fetch ('/jobs.json')
},
{
path: '/job/:id',
element: <JObdetails></JObdetails>,
loader: ()=> fetch ('/jobs.json')
}


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
