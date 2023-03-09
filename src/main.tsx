import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { BrowserRouter } from "react-router-dom";
import  {NavigationSetter} from "./Utils/GlobalNavigation/NavigationSetter";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
   <NavigationSetter />
    <App />
    <ToastContainer/>
  </BrowserRouter>,
)
