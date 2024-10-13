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
import C3 from './challanges/C3.jsx';
import C4 from './challanges/C4.jsx';
import C5 from './challanges/C5.jsx';

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
  }, {
    path: "C3",
    element: <C3/>
  }, {
    path: "C4",
    element: <C4 />
  }, {
    path: "C5", element: <C5 />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
