import { useEffect, useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store/hooks/hooks';
import {
  toggleCart,
  toggleMobileMenu,
  toggleAuthModal,
} from '@/store/audophileSlice';
import Cart from './cart/Cart';
import cartimg from '@/assets/cart.svg';
import logo from '../assets/usvlogo.jpg'
import { Search } from 'lucide-react';
import products from '@/helpers/products';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartIsShowing = useAppSelector((state) => state.appState.cartIsVisible);
  const dispatch = useDispatch();
  const toogleCartHandler = () => {
    dispatch(toggleCart(!cartIsShowing));
    dispatch(toggleMobileMenu(false));
    dispatch(toggleAuthModal(false));
    console.log(cartIsShowing);
  };
  const totalItems = useAppSelector((state) => state.appState.cart.length);

  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchTerm(searchInput);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  // Filter products
  const filteredProducts = products.items
    .map((product) => {
      const searchLower = searchTerm.toLowerCase();
      let score = 0;

      // Check matches and assign scores
      if (product.name?.toLowerCase().includes(searchLower)) score += 10; // High priority for name
      if (product.description?.toLowerCase().includes(searchLower)) score += 5; // Medium priority for description
      if (product.category?.toLowerCase().includes(searchLower)) score += 3; // Lower priority
      if (product.type?.toLowerCase().includes(searchLower)) score += 2; // Lowest priority

      return { ...product, score };
    })
    .filter((product) => product.score > 0) // Only include products with a positive score
    .sort((a, b) => b.score - a.score); // Sort by score in descending order


  // Highlight matching text
  const highlightText = (text: string, query: string) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className="bg-yellow-200">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };
  return (
    <>
      <div className=" z-50 fixed w-full">
        <div className="lg:hidden fixed w-full  pxpx py-5 bg-white border-b border-b-black/20">
          <div className=" flex items-center justify-between ">
            <h1 className=" uppercase text-lg flex items-center justify-center">
              <img src={logo} className=' h-[50px] mx-[10px] rounded-full' />
              USV UK Limited
            </h1>

            <div className=" flex items-center justify-center">
              <div
                className=" text-black hover:cursor-pointer mx-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Sheet>
                  <SheetTrigger>
                    <MenuOutlinedIcon />
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className=' flex items-center justify-center'>
                        <img src={logo} className=' h-[50px] mx-[10px] rounded-full' />
                        USV UK Limited
                      </SheetTitle>
                      <SheetDescription>
                        <div className=" w-full">
                          <ul className=" mb-4">
                            <SheetClose className=" w-full">
                              <a
                                href="/"
                                className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500"
                              >
                                Home
                              </a>
                            </SheetClose>
                            <SheetClose className=" w-full">
                              <a
                                href="/about"
                                className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500"
                              >
                                About
                              </a>
                            </SheetClose>
                            <SheetClose className=" w-full">
                              <a
                                href={'/shop'}
                                className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500"
                              >
                                Shop
                              </a>
                            </SheetClose>
                            <SheetClose className=" w-full">
                              <a
                                href={'/contact'}
                                className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500"
                              >
                                Contact
                              </a>
                            </SheetClose>
                          </ul>

                          <h1 className=" text-left text-black text-xl mb-4">
                            Categories
                          </h1>

                          <ul className=" mb-4">
                            <SheetClose className=" w-full">
                              <a
                                href={'/dermalfillers'}
                                className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500"
                              >
                                Dermal Fillers
                              </a>
                            </SheetClose>
                            <SheetClose className=" w-full">
                              <a
                                href={'/mesotherapy'}
                                className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500"
                              >
                                Mesotherapy
                              </a>
                            </SheetClose>
                            <SheetClose className=" w-full">
                              <a
                                href={'/hairTreatments'}
                                className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500"
                              >
                                Hair Treatments
                              </a>
                            </SheetClose>
                            <SheetClose className=" w-full">
                              <a
                                href={'/beauty'}
                                className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500"
                              >
                                Beauty
                              </a>
                            </SheetClose>
                            <SheetClose className=" w-full">
                              <a
                                href={'/fatDissolvers'}
                                className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500"
                              >
                                Fat Dissolvers
                              </a>
                            </SheetClose>
                            <SheetClose className=" w-full">
                              <a
                                href={'/chemicalPeels'}
                                className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500"
                              >
                                Chemical Peels
                              </a>
                            </SheetClose>
                            <SheetClose className=" w-full">
                              <a
                                href={'/botulinum'}
                                className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500"
                              >
                                Botulinum
                              </a>
                            </SheetClose>
                            <SheetClose className=" w-full">
                              <a
                                href={'/miscellaneous'}
                                className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500"
                              >
                                Miscellaneous
                              </a>
                            </SheetClose>
                          </ul>
                        </div>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
              <div
                onClick={toogleCartHandler}
                className="relative inline-flex items-center space-x-2 cursor-pointer"
              >
                <img src={cartimg} alt="cart-svg" className="h-6 w-6" />
                <div className="absolute top-0 right-0 translate-y-[-0.4rem] translate-x-[0.4rem] bg-blue-500 text-white text-xs px-1 py-[2px] font-semibold rounded-full">
                  {totalItems}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full fixed border-b border-b-black/20">
          <div className="lg:flex w-full hidden items-center justify-between pxpx py-3 bg-white">
            <div>
              <h1 className=" font-semibold text-xl flex items-center justify-center ">
                <img src={logo} className=' h-[50px] mx-[10px] rounded-full ' />
                USV UK LIMITED
              </h1>
            </div>



            <div className=" flex items-center justify-center">
              <Link
                to={'/'}
                className=" mx-4 uppercase hover:text-blue-500 duration-500"
              >
                Home
              </Link>
              <Link
                to={'/shop'}
                className=" mx-4 uppercase hover:text-blue-500 duration-500"
              >
                Shop
              </Link>
              <Link
                to={'/about'}
                className=" mx-4 uppercase hover:text-blue-500 duration-500"
              >
                About
              </Link>
              <Link
                to={'/contact'}
                className=" mx-4 uppercase hover:text-blue-500 duration-500"
              >
                Contact
              </Link>
              {/* SEARCH BAR */}
              <div className="p-4">
                {/* Search Button */}
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="px-4 py-2 text-black rounded-lg hover:text-blue-600 duration-500"
                >
                  <Search />
                </button>

                {/* Popup */}
                {isPopupOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white h-[300px] overflow-scroll rounded-lg shadow-lg w-full max-w-lg p-6 relative">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Search Products</h2>
                        <button
                          onClick={() => setIsPopupOpen(false)}
                          className="text-gray-500 hover:text-gray-800"
                        >
                          ✖
                        </button>
                      </div>

                      {/* Search Input */}
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />

                      {/* Results */}
                      <div className="space-y-4">
                        {filteredProducts.length > 0 ? (
                          filteredProducts.map((product) => (
                            <div
                              key={product.id}
                              className="p-4 border border-gray-200 rounded-lg shadow-sm flex space-x-4"
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div>
                                <h3 className="font-semibold">
                                  {highlightText(product.name, searchTerm)}
                                </h3>
                                {/* <p className="text-sm text-gray-500">
                                {highlightText(product.description, searchTerm)}
                              </p> */}
                                <p className="text-lg font-bold text-blue-600">
                                  ${product.price.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500">No products found.</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                onClick={toogleCartHandler}
                className="relative inline-flex items-center space-x-2 cursor-pointer"
              >
                <img src={cartimg} alt="cart-svg" className="h-6 w-6" />
                <div className="absolute top-0 right-0 translate-y-[-0.4rem] translate-x-[0.4rem] bg-blue-500 text-white text-xs px-1 py-[2px] font-semibold rounded-full">
                  {totalItems}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex w-full hidden items-center justify-between pxpx py-3 bg-white">
            <Link
              to={'/dermalfillers'}
              className=" w-fit text-left py-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-300 text-black hover:text-blue-500 duration-500"
            >
              Dermal Fillers
            </Link>
            <Link
              to={'/mesotherapy'}
              className=" w-fit text-left py-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-300 text-black hover:text-blue-500 duration-500"
            >
              Mesotherapy
            </Link>
            <Link
              to={'/hairTreatments'}
              className=" w-fit text-left py-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-300 text-black hover:text-blue-500 duration-500"
            >
              Hair Treatments
            </Link>
            <Link
              to={'/beauty'}
              className=" w-fit text-left py-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-300 text-black hover:text-blue-500 duration-500"
            >
              Beauty
            </Link>
            <Link
              to={'/fatDissolvers'}
              className=" w-fit text-left py-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-300 text-black hover:text-blue-500 duration-500"
            >
              Fat Dissolvers
            </Link>
            <Link
              to={'/chemicalPeels'}
              className=" w-fit text-left py-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-300 text-black hover:text-blue-500 duration-500"
            >
              Chemical Peels
            </Link>
            <Link
              to={'/botulinum'}
              className=" w-fit text-left py-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-300 text-black hover:text-blue-500 duration-500"
            >
              Botulinum
            </Link>
            <Link
              to={'/miscellaneous'}
              className=" w-fit text-left py-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-blue-300 text-black hover:text-blue-500 duration-500"
            >
              Miscellaneous
            </Link>
          </div>
        </div>
      </div>
      <Cart />
    </>
  );
};

export default Navbar;
