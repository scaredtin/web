import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import AuthLayout from "./Layout/AuthLayout";
import SignupForm from "./Auth/SignupForm";
import LoginForm from "./Auth/LoginForm";


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/auth',
        element: <AuthLayout/>,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
      {
        path: '/signup',
        element: <SignupForm />,
      },
    ],
   
   
    // path: '/login',
    // element: <></>,
    // path: '/signup',
    // element: <></>,
  },

])

export default router;
