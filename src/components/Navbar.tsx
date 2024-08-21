import { useState } from "react"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className=' z-50 fixed w-full'>
            <div className="md:hidden fixed w-full  px-4 py-3 bg-white">
                <div className=" flex items-center justify-between mb-6">
                    <h1 className=" uppercase text-lg">USV UK Limited</h1>
                    <div className=" text-black hover:cursor-pointer " onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {
                            isMenuOpen ? (<div><CloseOutlinedIcon /></div>) : (<div><MenuOutlinedIcon /></div>)
                        }
                    </div>
                </div>
                {
                    isMenuOpen && <div className=" w-full bg-white">
                        <ul>
                            <li>
                                <Link to={''} className="block mb-4  uppercase hover:text-blue-500 duration-500">Home</Link>
                            </li>
                            <li>
                                <Link to={''} className="block mb-4  uppercase hover:text-blue-500 duration-500">Shop</Link>
                            </li>
                            <li>
                                <Link to={''} className="block  mb-4 uppercase hover:text-blue-500 duration-500">About</Link>
                            </li>
                            <li>
                                <Link to={''} className="block mb-4  uppercase hover:text-blue-500 duration-500">Contact</Link>
                            </li>
                        </ul>
                    </div>
                }
            </div>

            <div className="md:flex fixed w-full hidden items-center justify-between px-4 py-3 bg-white">
                <div>
                    <Link to={''} className=" mx-4 uppercase hover:text-blue-500 duration-500">Shop</Link>
                    <Link to={''} className=" mx-4 uppercase hover:text-blue-500 duration-500">Men</Link>
                    <Link to={''} className=" mx-4 uppercase hover:text-blue-500 duration-500">Women</Link>
                </div>

                <div>
                    <h1 className=" font-semibold text-xl">USV UK LIMITED</h1>
                </div>

                <div>
                    <Link to={''} className=" mx-4 uppercase hover:text-blue-500 duration-500">About</Link>
                    <Link to={''} className=" mx-4 uppercase hover:text-blue-500 duration-500">Contact</Link>
                </div>
            </div>




        </div>
    )
}

export default Navbar
