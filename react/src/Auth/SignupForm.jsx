import { Link } from "react-router-dom";

export default function SignupForm() {
  return (
    <>
      <div className="flex flex-col justify-center flex-1 w-full min-h-full px-6 w lg:px-8">
          <h2 className="mt-5 text-3xl font-bold leading-9 tracking-tight text-center text-gray-900 uppercase">
            ĐĂNG KÝ
          </h2>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-1" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-700">
                Họ và tên
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"               
                  required
                  placeholder="Nhập họ và tên..."
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

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
                  placeholder="Nhập email..."
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-700">
                  Mật khẩu
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
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="passwordconfirm" className="block text-sm font-medium leading-6 text-gray-700">
                  Xác nhận mật khẩu
                </label>       
              </div>
              <div className="mt-2">
                <input
                  id="passwordconfirm"
                  name="passwordconfirm"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="********"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
                
            {/* <div>
              <button
                type="submit"
                className="flex mt-8 w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ĐĂNG KÝ
              </button>
            </div> */}
             <div class="">
                  <button type="submit" class="mt-6 items-center justify-center w-full px-6 py-2.5 text-center font-semibold text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black">                    
                        ĐĂNG KÝ
                  </button>
              </div>
          </form>
            {/* <div className="items-center block ml-2 text-sm underline mt-9 sm:hidden">
                <a href="#" className="font-semibold text-gray-700 hover:text-indigo-500">
                    Quên mật khẩu?
                </a>
            </div> */}
          <p className="mt-10 text-sm text-center text-gray-700">
            Bạn đã có tài khoản?{' '}
            <Link to="/login" className="font-semibold leading-6 text-gray-700 underline hover:text-indigo-500">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
