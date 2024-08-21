import { useState } from "react"
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from "react-router-dom";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className=' z-50 fixed w-full'>
            <div className="lg:hidden fixed w-full  px-4 py-3 bg-white">
                <div className=" flex items-center justify-between ">
                    <h1 className=" uppercase text-lg">USV UK Limited</h1>
                    <div className=" text-black hover:cursor-pointer " onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Sheet>
                            <SheetTrigger><MenuOutlinedIcon /></SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>USV UK Limited</SheetTitle>
                                    <SheetDescription>
                                        <div className=" w-full">
                                            <ul className=" mb-4">
                                                <Link to={'/'} className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500">Home</Link>
                                                <Link to={'/about'} className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500">About</Link>
                                                <Link to={'/shop'} className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500">Shop</Link>
                                                <Link to={''} className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500">Contact</Link>
                                            </ul>

                                            <h1 className=" text-left text-black text-xl mb-4">Categories</h1>

                                            <ul className=" mb-4">
                                                <Link to={'/dermalfillers'} className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500">Dermal Fillers</Link>
                                                <Link to={'/mesotherapy'} className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500">Mesotherapy</Link>
                                                <Link to={''} className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500">Hair Treatments</Link>
                                                <Link to={''} className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500">Beauty</Link>
                                                <Link to={''} className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500">Fat Dissolvers</Link>
                                                <Link to={''} className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500">Chemical Peels</Link>
                                                <Link to={''} className=" block w-full text-left py-4 border-b-2 border-b-slate-100 text-black uppercase hover:text-blue-500 duration-500">Miscellaneous</Link>
                                            </ul>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

            </div>

            <div className=" w-full fixed">
                <div className="lg:flex w-full hidden items-center justify-between px-4 py-3 bg-white">
                    {/* <div>
                        <Link to={''} className=" mx-4 uppercase hover:text-blue-500 duration-500">Shop</Link>
                        <Link to={''} className=" mx-4 uppercase hover:text-blue-500 duration-500">Cosmetics</Link>
                        <Link to={''} className=" mx-4 uppercase hover:text-blue-500 duration-500">Accessories</Link>
                    </div> */}

                    <div>
                        <h1 className=" font-semibold text-xl">USV UK LIMITED</h1>
                    </div>

                    <div>
                        <Link to={'/'} className=" mx-4 uppercase hover:text-blue-500 duration-500">Home</Link>
                        <Link to={'/shop'} className=" mx-4 uppercase hover:text-blue-500 duration-500">Shop</Link>
                        <Link to={'/about'} className=" mx-4 uppercase hover:text-blue-500 duration-500">About</Link>
                        <Link to={''} className=" mx-4 uppercase hover:text-blue-500 duration-500">Contact</Link>
                    </div>
                </div>
                <div className="lg:flex w-full hidden items-center justify-between px-4 py-3 bg-white">
                    <Link to={'/dermalfillers'} className=" w-fit text-left py-2 hover:border-b-2 border-b-blue-300 text-black uppercase hover:text-blue-500 duration-500">Dermal Fillers</Link>
                    <Link to={'/mesotherapy'} className=" w-fit text-left py-2 hover:border-b-2 border-b-blue-300 text-black uppercase hover:text-blue-500 duration-500">Mesotherapy</Link>
                    <Link to={''} className=" w-fit text-left py-2 hover:border-b-2 border-b-blue-300 text-black uppercase hover:text-blue-500 duration-500">Hair Treatments</Link>
                    <Link to={''} className=" w-fit text-left py-2 hover:border-b-2 border-b-blue-300 text-black uppercase hover:text-blue-500 duration-500">Beauty</Link>
                    <Link to={''} className=" w-fit text-left py-2 hover:border-b-2 border-b-blue-300 text-black uppercase hover:text-blue-500 duration-500">Fat Dissolvers</Link>
                    <Link to={''} className=" w-fit text-left py-2 hover:border-b-2 border-b-blue-300 text-black uppercase hover:text-blue-500 duration-500">Chemical Peels</Link>
                    <Link to={''} className=" w-fit text-left py-2 hover:border-b-2 border-b-blue-300 text-black uppercase hover:text-blue-500 duration-500">Miscellaneous</Link>
                </div>
            </div>




        </div>
    )
}

export default Navbar
