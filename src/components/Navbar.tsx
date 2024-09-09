import { useState } from 'react';
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
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
// import * as SheetPrimitive from "@radix-ui/react-dialog"

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
  return (
    <>
      <div className=" z-50 fixed w-full">
        <div className="lg:hidden fixed w-full  pxpx py-5 bg-white border-b border-b-black/20">
          <div className=" flex items-center justify-between ">
            <h1 className=" uppercase text-lg">USV UK Limited</h1>
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
                      <SheetTitle>USV UK Limited</SheetTitle>
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
              <h1 className=" font-semibold text-xl">USV UK LIMITED</h1>
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
