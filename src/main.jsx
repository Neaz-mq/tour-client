import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import AllServices from './components/AllServices/AllServices.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import AuthProvider from './Hook/AuthProvider.jsx';
import TourDetails from './components/TourDetails/TourDetails.jsx';
import AddService from './components/AddService/AddService.jsx';
import ServiceDetails from './components/ServiceDetails/ServiceDetails.jsx';

import UpdateService from './components/UpdateService/UpdateService.jsx';
import PrivateRoute from './utility/PrivateRoute.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <AllServices></AllServices>,
      },
      {
        path: '/tour/:id',
        element: (
          <PrivateRoute>
         <TourDetails></TourDetails>
        </PrivateRoute>
        ), 
       
        loader: ({params}) => fetch(`https://tour-guide-server-azure.vercel.app/tours/${params.id}`)
      
           
      },
      {
        path: '/service',
        element: <PrivateRoute>
          <AddService></AddService>
        </PrivateRoute>
      },
      {
        path: '/service/tour',
        element: (
           
           <PrivateRoute>
             <ServiceDetails></ServiceDetails>
           </PrivateRoute>
           
        ),
        loader: () => fetch('https://tour-guide-server-azure.vercel.app/service')
      },

      {
        path: '/updateService/:id',
        element: <UpdateService></UpdateService>,
        loader: ({params}) => fetch(`https://tour-guide-server-azure.vercel.app/service/${params.id}`)
      },
     
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
