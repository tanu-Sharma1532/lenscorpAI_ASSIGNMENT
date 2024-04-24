import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import Login from './component/Login';
import Employeedata from './component/EmployeeData';
import Hrform from './component/Hrform';
import Signup from './component/Signup';
import Error from './component/Error';
import {AuthProvider} from './store/auth'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/allemployees" element={<Employeedata />} />
      <Route path='/createemployee' element={<Hrform />} />
      <Route path='*' element={<Error />} />

    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
      {/* <App /> */}
    </React.StrictMode>
  </AuthProvider>
);

reportWebVitals();
