import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=" bg-white px-3 md:px-6 py-4">
            <div className=" md:flex items-start justify-between">
                <div className=" mb-6 md:w-[20%]">
                    <ul>
                        <li className=" font-semibold text-2xl uppercase mb-4">USV UK LIMITED</li>
                        <li className=" text-lg font-light"><span className=' font-semibold'>Company No.</span> 06463435</li>
                        <li className=" text-lg font-light"><span className=' font-semibold'>Company Address:</span> Regus Woburn Place 16 Upper Worburn Place Euston London WC1H 0AF</li>
                    </ul>
                </div>

                <div className=" mb-6 md:w-[20%]">
                    <ul>
                        <li className=" font-semibold text-2xl uppercase mb-4">Links</li>
                        <li className=" text-lg font-light"><Link to={'/'}>Home</Link></li>
                        <li className=" text-lg font-light">Shop</li>
                        <li className=" text-lg font-light"><Link to={'/about'}>About</Link></li>
                        <li className=" text-lg font-light">Contact</li>
                    </ul>
                </div>

                <div className=" mb-6 md:w-[20%]">
                    <ul>
                        <li className=" font-semibold text-2xl uppercase mb-4">Categories</li>
                        <li className=" text-lg font-light">Cosmetics</li>
                        <li className=" text-lg font-light">Accessories</li>
                    </ul>
                </div>

                <div className=" mb-6 md:w-[20%] flex items-start justify-start">
                    <Link to={''} className=' text-4xl mx-4'><FacebookOutlinedIcon/></Link>
                    <Link to={''} className=' text-4xl mx-4'><InstagramIcon/></Link>
                    <Link to={''} className=' text-4xl mx-4'><XIcon/></Link>
                    <Link to={''} className=' text-4xl mx-4'><MailOutlineIcon/></Link>
                </div>

            </div>
            <div className=" text-center mb-4">
                <p>All Rights Reserved By @USV UK LIMITED</p>
            </div>
        </div>
    )
}

export default Footer
