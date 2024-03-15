import { Link } from "react-router-dom";
import imageSocialGoogle from '../assets/social/google.png';
import imagelogo from '../assets/logo/logo-removebg-preview.png';
export default function LoginForm() {
return (
<>
    <div className="flex flex-col justify-center flex-1 w-full h-screen lg:px-8">
      {/* <img
            className="hidden w-auto h-40 mx-auto sm:block"
            src={imagelogo}
            alt="logo shop"
          /> */}
      <div className="block bg-red-500 h-1/3 sm:hidden">
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
            ĐĂNG NHẬP
        </h2>
        <div className="mx-4 mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-3" action="#" method="POST">
                <div className="relative mt-2">
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
                <div className="relative">
                    <input
                        className="w-full py-3 pl-12 leading-tight text-gray-600 transition border border-gray-100 rounded-md shadow-sm appearance-none focus:shadow-md focus:placeholder-gray-600 focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                        id="password" type="password" placeholder="Password" />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="p-1 ml-3 text-gray-400 h-7 w-7"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                        </svg>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center justify-start">
                        <input name="rememberpass" type="checkbox"
                            className="w-5 h-5 mx-2 accent-gray-500 focus:accent-gray-500"></input>
                        <label htmlFor="rememberpass" className="block text-sm font-medium text-gray-700">
                            Ghi nhớ mật khẩu
                        </label>
                    </div>
                    <div className="text-sm underline">
                        <Link to="/forgotpassword"
                            className="mx-2 text-sm font-medium text-gray-700 hover:text-indigo-500">
                        Bạn đã quên mật khẩu?
                        </Link>
                    </div>
                    {/* <div className="items-center block ml-2 text-sm underline mt-9 sm:hidden">
                      <Link to="/forgotpassword" className="font-semibold text-gray-700 hover:text-indigo-500">
                      Quên mật khẩu?
                      </Link>
                    </div> */}
                </div>

                {/* <div>
                    <button type="submit"
                        className="w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        ĐĂNG NHẬP
                    </button>
                </div> */}
                <div className="">
                    <button type="submit"
                        className="items-center w-full bg-black px-6 py-2.5 mt-4 text-center text-white font-semibold duration-200 border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black transition transform hover:-translate-y-0.5">
                        ĐĂNG NHẬP
                    </button>
                </div>
            </form>
            {/* <div>
                <button type="button"
                    className="flex mt-2 w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-align: center">
                    <img className="h-5 mr-2" src="src/assets/google.png" alt="Google" />
                    ĐĂNG NHẬP GOOGLE
                </button>
            </div> */}
            <div className="mt-4">
                <button
                    className="flex items-center justify-center w-full px-6 py-2.5 text-center font-semibold text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black transition transform hover:-translate-y-0.5">
                    <img className="h-5 mr-2" src={imageSocialGoogle} alt="Google" />
                    ĐĂNG NHẬP GOOGLE
                </button>
            </div>


            <p className="mt-10 text-sm text-center text-gray-700">
                Bạn chưa có tài khoản?{' '}
                <Link to="/signup" className="font-semibold leading-6 text-gray-700 underline hover:text-indigo-500">
                Tạo ngay tại đây
                </Link>
            </p>
        </div>
    </div>
</>
)
}
