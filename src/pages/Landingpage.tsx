import { Link } from 'react-router-dom';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import products from '../helpers/products';
import { FadeReveal } from '@/components/animations/FadeReveal';

const Landingpage = () => {
  const bestSellingProducts = products.items.filter((item) => {
    return item.featured === 'yes';
  });

  const featuredProducts = products.items.filter((item) => {
    return item.bestSeller === 'yes';
  });
  return (
    <div className="pt-10">
      <FadeReveal>
        <div className="h-[90vh] md:h-screen mb-6 home-bg flex items-center sm:justify-start justify-center text-center pxpx">
          <div className=" w-full sm:w-[40%] md:w-[60%] lg:w-[80%] sm:text-left mx2xl">
            <h1 className="uppercase text-4xl md:text-5xl lg:text-[72px] lg:leading-[1.2] font-bold text-white mb-6">
              we provide <span className=" text-blue-500">medical</span>{' '}
              products that you can{' '}
              <span className=" text-blue-500">trust</span>
            </h1>
            <p className=" mb-10 text-white">
              USV UK Limited, your go to for top medical products that not only
              fit your needs but fit your budget.
            </p>
            <Link
              to={''}
              className=" capitalize py-4 px-10 bg-blue-500 text-white font-semibold hover:bg-blue-300 duration-500 rounded-lg"
            >
              shop now
            </Link>
          </div>
        </div>
      </FadeReveal>

      <FadeReveal>
        <div className="mb-10 pxpx">
          <h1 className=" uppercase font-semibold text-black text-3xl sm:text-4xl mb-6 mx2xl">
            Best seller
          </h1>
          <div className="flex flex-col md:flex-row mx2xl">
            {bestSellingProducts.map((item, index) => (
              <div
                key={index}
                className="relative group w-[95%] md:w-[22%] cursor-pointer duration-500 m-auto min-h-[400px] border border-slate-300 rounded-lg mb-6"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className=" w-full rounded-t-lg"
                  />
                  <h1 className=" mx-4">{item.name}</h1>
                  <h1 className=" mx-4 font-semibold text-green-600">
                    {item.price}
                  </h1>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <a
                    href="#"
                    className="text-black text-lg py-2 px-6 duration-500 hover:px-8 bg-white"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeReveal>

      <FadeReveal>
        <div className=" exclusive-bg w-[100vw] py-20 pxpx mx2xl mb-20 flex items-center md:items-end justify-start">
          <div className=" md:w-[50%] mb-6 mx2xl">
            <h1 className=" font-semibold text-4xl md:text-5xl text-white mb-4">
              USV Exclusive Deal
            </h1>
            <p className=" font-thin text-white w-[65%] mb-4 md:text-xl">
              USV Exclusives. Elevate your skin with premium brands, where
              luxury meets comfort. Immerse yourself in a world of unparalleled
              elegance. Explore now!
            </p>
            <Link
              to={''}
              className=" text-white md:text-xl hover:border-b-2 hover:border-white duration-500 pb-2"
            >
              Visit Shop <ArrowRightAltOutlinedIcon />
            </Link>
          </div>
        </div>
      </FadeReveal>

      <FadeReveal>
        <div className=" w-[100vw] mb-10 pxpx">
          <h1 className=" uppercase font-semibold text-black text-3xl sm:text-4xl mb-6 mx2xl">
            Featured
          </h1>
          <div className="mx2xl flex flex-col md:flex-row">
            {featuredProducts.map((item, index) => (
              <div
                key={index}
                className="relative group w-[95%] md:w-[22%] cursor-pointer duration-500 m-auto min-h-[400px] border border-slate-300 rounded-lg mb-6"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className=" w-full rounded-t-lg"
                  />
                  <h1 className=" mx-4">{item.name}</h1>
                  <h1 className=" mx-4 font-semibold text-green-600">
                    {item.price}
                  </h1>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <a
                    href="#"
                    className="text-black text-lg py-2 px-6 duration-500 hover:px-8 bg-white"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeReveal>

      <FadeReveal>
        <div className=" w-full pxpx mx2xl">
          <div className=" flex flex-col items-center justify-between sm:flex-row mb-4 md:mb-6 mx2xl">
            <h1 className=" uppercase font-semibold text-black text-3xl sm:text-4xl mb-6">
              SHOP
            </h1>
            <Link
              to={''}
              className=" capitalize py-4 px-10 bg-blue-500 text-white font-semibold hover:bg-blue-300 duration-500 rounded-lg"
            >
              visit shop
            </Link>
          </div>
          <div className=" flex flex-col items-center justify-between sm:flex-row mb-4 md:mb-6 mx2xl">
            <div className="cosmetics-bg mb-6 h-[50vh] md:h-[65vh] w-[95%] md:w-[45%] p-3 m-auto bg-red-700 flex items-end justify-start">
              <h1 className=" text-white font-semibold text-xl">Cosmetics</h1>
            </div>
            <div className="accessories-bg mb-6 h-[50vh] md:h-[65vh] w-[95%] md:w-[45%] p-3 m-auto bg-red-700 flex items-end justify-start">
              <h1 className=" text-white font-semibold text-xl">Accessories</h1>
            </div>
          </div>
        </div>
      </FadeReveal>
    </div>
  );
};

export default Landingpage;
