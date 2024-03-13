import {createBrowserRouter} from "react-router-dom";
import AuthLayout from "./Layout/AuthLayout";
import SignupForm from "./Auth/SignupForm";
import LoginForm from "./Auth/LoginForm";

const router = createBrowserRouter([

  {
    path: '/',
    element: <AuthLayout />,
    children:[
      {
        path: 'login',
        element: <LoginForm />,       
      },
      {
        path: 'signup',
        element: <SignupForm />,
      }
    ],
    
  },
])

export default router;
