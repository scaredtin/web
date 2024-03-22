import { Navigate, Outlet } from "react-router-dom";
import { useUserState } from "../contexts/ContextProvider";
import imagelogo from '../assets/logo/logo-removebg-preview.png';
export default function AuthLayout() {
    const {currentUser, userToken} = useUserState();

    if(userToken){ return <Navigate to="/"/>}

  return (
    <>
      <div className="flex bg-orange-100 sm:flex lg:px-8">       
        <div className="flex-col justify-center hidden p-2 bg-red-500 sm:mx-auto sm:w-full sm:max-w-sm sm:flex">       
          <img
            className="hidden w-auto mx-auto h-44 sm:block"
            src={imagelogo}
            alt="logo shop"
          />
          <h2 className="hidden mt-5 text-5xl font-bold leading-9 tracking-tight text-center text-gray-900 uppercase sm:block">
              H & D
          </h2>
          <h5 className="hidden mt-5 text-xl font-bold leading-9 tracking-tight text-center text-gray-900 uppercase sm:block">
              Cửa hàng thời trang <br /> xu hướng 2024
          </h5>
        </div>
        
          <Outlet/>
             
      </div>
    </>
  )
}
