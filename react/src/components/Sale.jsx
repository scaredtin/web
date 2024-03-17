import { Link } from 'react-router-dom';

const products = [
  {
    id: 0,
    name: 'Áo Thể Thao',
    size: "XL",
    href: '#',
    price: '480.000',
    sale: '-10%',
    priceSale: '432.000',
    imageSrc: 'https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/January2024/23CMAW.AT003.3D.2.jpg',
    imageAlt: 'ao the thao',
  },
  {
    id: 1,
    name: 'Áo Thể Thao',
    size: "XL",
    href: '#',
    price: '480.000',
    sale: '-10%',
    priceSale: '432.000',
    imageSrc: 'https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/January2024/23CMAW.AT003.3D.2.jpg',
    imageAlt: 'ao the thao',
  },
  {
    id: 2,
    name: 'Áo Thể Thao',
    size: "XL",
    href: '#',
    price: '480.000',
    sale: '-10%',
    priceSale: '432.000',
    imageSrc: 'https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/January2024/23CMAW.AT003.3D.2.jpg',
    imageAlt: 'ao the thao',
  },
  {
    id: 3,
    name: 'Áo Thể Thao',
    size: "XL",
    href: '#',
    price: '480.000',
    sale: '-10%',
    priceSale: '432.000',
    imageSrc: 'https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/January2024/23CMAW.AT003.3D.2.jpg',
    imageAlt: 'ao the thao',
  },
  {
    id: 4,
    name: 'Áo Thể Thao Áo Thể Thao Áo Thể Thao',
    size: "XL",
    href: '#',
    price: '480.000',
    sale: '-10%',
    priceSale: '432.000',
    imageSrc: 'https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/January2024/23CMAW.AT003.3D.2.jpg',
    imageAlt: 'ao the thao',
  },
  
  // More products...
]


export default function Sale() {
  return (
     <div className="bg-white">
      <div className="max-w-2xl p-2 mx-auto sm:px-6 sm:py-12 lg:max-w-7xl lg:px-2 sm:block">
         <h2 className="hidden p-2 text-3xl font-bold leading-9 tracking-tight text-gray-900 uppercase sm:block">
            SẢN PHẨM ĐANG GIẢM GIÁ
        </h2>
        <h2 className="block p-4 text-3xl font-bold leading-9 text-center text-gray-900 uppercase sm:hidden">
            SẢN PHẨM ĐANG GIẢM GIÁ
        </h2>        
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} to={product.href} className="group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
              <h3 className="w-full px-1 mt-4 text-xl text-gray-900 truncate line-clamp-1">{product.name}</h3>
              <div className='flex'>
                <p className="px-1 mt-1 text-lg font-medium text-gray-900">{product.priceSale}</p>
                <p className="px-1 mt-1 text-lg font-medium text-gray-500 line-through">{product.price}</p>
                <p className="px-1 mt-1 text-lg font-medium text-red-500">{product.sale}</p>
              </div>
              
               <div className="flex items-center justify-center mt-6 gap-x-6">
                {/* <button type="button" className="w-full py-2 text-sm font-semibold leading-6 text-gray-900 bg-gray-300 rounded-md hover:bg-black hover:text-white">
                  Buy Now
                </button> */}
                <button
                  type="submit"
                  className="w-full py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Mua Ngay
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
