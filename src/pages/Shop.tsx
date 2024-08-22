import { Link } from 'react-router-dom';
import products from '../helpers/products';

const Shop = () => {
  return (
    <div className="pt-[120px] lg:pt-[180px]">
      <h1 className=" font-bold mb-6 text-5xl pxpx mx2xl">OUR PRODUCTS</h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 w-[100vw] pxpx mx2xl">
        {products.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-[95%] items-center justify-between cursor-pointer duration-500 m-auto min-h-[400px] border border-slate-300 mb-6"
          >
            <div className=' group text-center'>
              <img
                src={item.image}
                alt={item.name}
                className=" w-[90%] m-auto rounded-t-lg group-hover:w-[91%] duration-500"
              />
              <h1 className=" mx-4 text-xl">{item.name}</h1>
              <h1 className=" mx-4 font-semibold text-green-600 text-2xl mb-6">
                {item.price}
              </h1>
            </div>
            <Link
              to={''}
              className=' w-full text-center bg-green-600 text-white text-s py-4 uppercase'
            >
              Buy Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
