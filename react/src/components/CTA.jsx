import React from "react";

const Cta3 = () => {
    return (
        <div className="container flex items-center justify-center px-4 py-12 mx-auto sm:px-6 2xl:px-0">
            <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-y-0">
                <div className="flex flex-col items-start justify-start w-80 sm:w-auto">
                    <div>
                        <p className="text-3xl font-semibold leading-9 text-gray-800 xl:text-4xl">Xin chào</p>
                    </div>
                    <div className="mt-4 lg:w-4/5 xl:w-3/5">
                        <p className="text-base leading-6 text-gray-600">
                            Cảm ơn bạn đã ghé thăm cửa hàng của chúng tôi. Hãy xem những sản phẩm mà chúng tôi có và có thể bạn sẽ thích nó.</p>
                    </div>
                    <div className="w-full mt-16">
                        <button className="flex items-center justify-between w-full px-4 text-white bg-gray-900 lg:w-72 h-14 hover:bg-gray-700">
                            <p className="text-xl font-medium leading-5">Xem thêm</p>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66663 16H25.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 21.3333L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 10.6667L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-4 sm:flex-row jusitfy-center sm:space-x-5 xl:space-x-8 sm:space-y-0">
                    <div>
                        <img className="hidden lg:block" src="https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/January2024/AT.220.xd.8_75.jpg" alt="sofa" />
                        <img className="w-80 sm:w-auto lg:hidden" src="https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/January2024/AT.220.xd.8_75.jpg" alt="sofa" />
                    </div>
                    <div>
                        <img className="hidden lg:block" src="https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/January2024/AT.220.xd.8_75.jpg" alt="sofa" />
                        <img className="w-80 sm:w-auto lg:hidden" src="https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/January2024/AT.220.xd.8_75.jpg" alt="sofa" />
                    </div>

                    {/* <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
                        <div>
                            <img className="hidden lg:block" src="https://i.ibb.co/1MY5P3y/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-1.png" alt="chairs" />
                            <img className="w-80 sm:w-auto lg:hidden" src="https://i.ibb.co/r0rvcCh/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="chairs" />
                        </div>
                        <div>
                            <img className="hidden lg:block" src="https://i.ibb.co/9N7ZX2C/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="chairs" />
                            <img className="w-80 sm:w-auto lg:hidden" src="https://i.ibb.co/0BFt400/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-2.png" alt="chairs" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Cta3;
