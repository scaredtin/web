import {createBrowserRouter} from "react-router-dom";
import SignupForm from "./Auth/SignupForm";
import LoginForm from "./Auth/LoginForm";
import App from "./App";
import AdminLayout from "./Layout/admin/AdminLayout";
import GuestLayout from "./Layout/GuestLayout";
import ManagerLayout from "./Layout/admin/ManagerLayout";
import UserLayout from "./Layout/UserLayout";
import StaffLayout from "./Layout/admin/StaffLayout";
import ForgotPassword from "./Auth/ForgotPassword";
import AuthLayout from './Layout/AuthLayout';
import ProductsFilter from "./pages/ProductsFilter";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // children:[
    //   {
    //         path: 'user',
    //         element: <UserLayout />,
    //   },
    //   {
    //         path: 'products',
    //         element: <ProductsFilter />,
    //   },
    // ]
  },  
  {
        path: '/user',
        element: <UserLayout />,
  },
  {
        path: '/products',
        element: <ProductsFilter />,
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
    path: 'admin',
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
