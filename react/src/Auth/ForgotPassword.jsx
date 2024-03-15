import React from 'react'
import { Link } from "react-router-dom";
import imagelogo from '../assets/logo/logo-removebg-preview.png';
export default function ForgotPassword() {
return (
<>
    <div className="flex flex-col justify-center flex-1 w-full h-screen lg:px-8">
      {/* <img
            className="hidden w-auto h-40 mx-auto sm:block"
            src={imagelogo}
            alt="logo shop"
          /> */}
      <div className="block bg-red-500 h-1/4 sm:hidden">
        <img
            className="block w-auto h-40 mx-auto sm:hidden"
            src={imagelogo}
            alt="logo shop"
      />
        <h2 className="block text-4xl font-bold leading-9 tracking-tight text-center text-gray-900 uppercase sm:hidden">
            H & D
        </h2>
      </div>
        <h2 className="mt-5 text-4xl font-bold leading-9 tracking-tight text-center text-gray-900 uppercase">
            QUÊN MẬT KHẨU?
        </h2>
        <div className="mx-4 mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-3" action="#" method="POST">
                {/* <div>
                    <div className="mt-2">
                        <input id="email" name="email" type="email" autoComplete="email" required autoFocus
                            placeholder="Nhập email..."
                            className="text-center block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div> */}
                <div className="relative">
                    <input
                        className="w-full py-3 pl-12 leading-tight text-gray-600 transition border border-gray-100 rounded-md shadow-sm appearance-none focus:shadow-md focus:placeholder-gray-600 focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                        id="Email" type="email" placeholder="Email" />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="p-1 ml-3 text-gray-400 h-7 w-7"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </div>
                </div>
                <div className="">
                    <button type="submit"
                        className="items-center w-full bg-black px-6 py-2.5 text-center text-white font-semibold duration-200 border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black transition transform hover:-translate-y-0.5">
                        GỬI
                    </button>
                </div>
            </form>
            <p className="mt-10 text-sm text-center text-gray-700">
                Quay lại
                {' '}
                <Link to="/login" className="font-semibold leading-6 text-gray-700 underline hover:text-indigo-500">
                đăng nhập {'<--'} </Link>
            </p>
        </div>
    </div>
</>
)
}
