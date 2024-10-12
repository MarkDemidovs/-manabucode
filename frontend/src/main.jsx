import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Account from './Account.jsx';
import Sign from './Sign.jsx';
import Log from './Log.jsx';
import App from './App.jsx'
import './index.css'
import C1 from './challanges/C1.jsx';
import C2 from './challanges/C2.JSX';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "account",
    element: <Account />
  },{
    path: "account/sign",
    element: <Sign />
  },{
    path: "account/log",
    element: <Log />
  }, {
    path: "C1", 
    element: <C1/>
  }, {
    path: "C2",
    element: <C2 />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
