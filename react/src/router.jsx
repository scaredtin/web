import {createBrowserRouter} from "react-router-dom";
import AuthLayout from "./Layout/AuthLayout";
import SignupForm from "./Auth/SignupForm";
import LoginForm from "./Auth/LoginForm";
import App from "./App";
import AdminLayout from "./Layout/AdminLayout";
import GuestLayout from "./Layout/GuestLayout";
import ManagerLayout from "./Layout/ManagerLayout";
import UserLayout from "./Layout/UserLayout";
import StaffLayout from "./Layout/StaffLayout";
import ForgotPassword from "./Auth/ForgotPassword";

const router = createBrowserRouter([
  {
    // guest
    path: '/guest',
    element: <App />,
    children:[
      {
        path: 'guest',
        element: <GuestLayout />,
      },
      {
        path: 'user',
        element: <UserLayout />,
      }
    ],
  },   
  // auth
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
      },
      {
        path: 'forgotpassword',
        element: <ForgotPassword />,
      }
    ]
  },   
  // admin
  {
    path: '/admin',
    element: <AdminLayout />,
    children:[
      {
        path: 'manager',
        element: <ManagerLayout />,
      },
      {
        path: 'staff',
        element: <StaffLayout />,
      }
    ]
  },  
])

export default router;
