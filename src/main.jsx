import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main.jsx';
import Home from './HOme/Home.jsx';
import Register from './Register/Register.jsx';
import Loginn from './Login/Loginn.jsx';
import Registitons from './Registioton/Registitons.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Loginn></Loginn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/registition',
        element: <Registitons></Registitons>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
