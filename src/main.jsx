import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Routs/Routs';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto bg-white'>
    <RouterProvider router={router} />
    </div>
    
  </React.StrictMode>,
)
