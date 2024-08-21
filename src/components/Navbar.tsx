import { useState } from "react"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div>
            <div className="md:hidden fixed w-full flex items-center justify-between px-4 py-3 bg-white">
                <h1 className=" uppercase text-lg">USV UK Limited</h1>
                <div className=" text-black hover:cursor-pointer " onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {
                        isMenuOpen ? (<div><CloseOutlinedIcon /></div>) : (<div><MenuOutlinedIcon /></div>)
                    }
                </div>
            </div>
            <div className="md:flex fixed w-full hidden items-center justify-between px-4 py-3 bg-white">
                <div>
                    <Link className=" mx-4 uppercase hover:text-blue-500 duration-500">Shop</Link>
                    <Link className=" mx-4 uppercase hover:text-blue-500 duration-500">Men</Link>
                    <Link className=" mx-4 uppercase hover:text-blue-500 duration-500">Women</Link>
                </div>

                <div>
                    <h1 className=" font-semibold text-xl">USV UK LIMITED</h1>
                </div>

                <div>
                    <Link className=" mx-4 uppercase hover:text-blue-500 duration-500">About</Link>
                    <Link className=" mx-4 uppercase hover:text-blue-500 duration-500">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
