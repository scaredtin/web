import { Link } from "react-router-dom";
import imageSocialGoogle from '../assets/social/google.png';
export default function LoginForm() {
  return (
    <>
      <div className="flex flex-col justify-center flex-1 w-full min-h-full px-6 w lg:px-8">
          <h2 className="mt-5 text-3xl font-bold leading-9 tracking-tight text-center text-gray-900 uppercase">
            ĐĂNG NHẬP
          </h2>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-700">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  autoFocus
                  placeholder="Nhập email..."
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-700">
                  Mật Khẩu
                </label>       
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="********"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center justify-start">
                    <input name="rememberpass" type="checkbox" className="mx-2 accent-gray-500 focus:accent-gray-500"></input>
                    <label htmlFor="rememberpass" className="block text-sm font-medium text-gray-700">
                        Ghi nhớ mật khẩu
                    </label>       
                </div>
                <div className="hidden text-sm underline sm:block">                  
                  <Link to="/forgotpassword" className="mx-2 text-sm font-medium text-gray-700 hover:text-indigo-500">
                      Bạn đã quên mật khẩu?
                  </Link>
                </div>
            </div>
                
            {/* <div>
              <button
                type="submit"
                className="w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ĐĂNG NHẬP
              </button>
            </div> */}
             <div class="">
                  <button type="submit" class="items-center justify-center w-full px-6 py-2.5 mt-4 text-center text-white font-semibold duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black">                    
                        ĐĂNG NHẬP
                  </button>
              </div>
          </form>
            {/* <div>
              <button
                type="button"
                className="flex mt-2 w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-align: center"  >
                <img className="h-5 mr-2" src="src/assets/google.png" alt="Google" />
                ĐĂNG NHẬP GOOGLE
              </button>
            </div> */}
              <div class="mt-4">
                  <button class="flex items-center justify-center w-full px-6 py-2.5 text-center font-semibold text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black">
                    <img className="h-5 mr-2" src={imageSocialGoogle} alt="Google" />
                        ĐĂNG NHẬP GOOGLE
                  </button>
              </div>

            <div className="items-center block ml-2 text-sm underline mt-9 sm:hidden">
                <Link to="/forgotpassword" className="font-semibold text-gray-700 hover:text-indigo-500">
                    Quên mật khẩu?
                </Link>
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
