import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    size: "XL",
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    size: "XL",
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    size: "XL",
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    size: "XL",
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Machined Mechanical Pencil',
    size: "XL",
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
   {
    id: 6,
    name: 'Machined Mechanical Pencil',
    size: "XL",
    href: '#',
    price: '350.000 VNĐ',
    imageSrc: 'https://img.lazcdn.com/g/p/2b6a3535054ea5fca71d2825f61e7ece.jpg_720x720q80.jpg_.webp',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  
  // More products...
]


export default function Products() {
  return (
     <div className="bg-white">
      <div className="max-w-2xl p-2 mx-auto sm:px-6 sm:py-12 lg:max-w-7xl lg:px-2 sm:block">
         <h2 className="hidden p-2 text-3xl font-bold leading-9 tracking-tight text-gray-900 uppercase sm:block">
            SẢN PHẨM MỚI NHẤT
        </h2>
        <h2 className="block p-4 text-3xl font-bold leading-9 text-center text-gray-900 uppercase sm:hidden">
            SẢN PHẨM MỚI NHẤT
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
              <h3 className="w-full px-1 mt-4 text-sm text-gray-700 truncate line-clamp-1">{product.name}</h3>
              <p className="px-1 mt-1 text-lg font-medium text-gray-900">{product.price}</p>
               <div className="flex items-center justify-center mt-6 gap-x-6">
                {/* <button type="button" className="w-full py-2 text-sm font-semibold leading-6 text-gray-900 bg-gray-300 rounded-md hover:bg-black hover:text-white">
                  Buy Now
                </button> */}
                <button
                  type="submit"
                  className="w-full py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
