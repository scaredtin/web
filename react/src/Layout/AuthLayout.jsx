import { Navigate, Outlet } from "react-router-dom";
import { useUserState } from "../contexts/ContextProvider";
import imagelogo from '../assets/logo/logo-removebg-preview.png';
export default function AuthLayout() {
    const {currentUser, userToken} = useUserState();

    if(userToken){
        return <Navigate to="/"/>
    }
  return (
    <>
      <div className="justify-center w-full min-h-full px-6 lg:px-8">       
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="w-auto mx-auto h-28"
            src={imagelogo}
            alt="logo shop"
          />
        </div>

        <Outlet/>
      </div>
    </>
  )
}
