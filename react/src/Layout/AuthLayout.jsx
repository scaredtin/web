import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  return (
    <>
      <div className="justify-center w-full min-h-full px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="w-auto mx-auto h-28"
            src="./src/assets/Logo_removebg.png"
            alt="Your Company"
          />
        </div>

        <Outlet/>
      </div>
    </>
  )
}
