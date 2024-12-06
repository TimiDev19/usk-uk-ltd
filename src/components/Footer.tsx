import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';
import { smoothScrollToSection } from './SmoothScrollToSection';

const Footer = () => {
  return (
    <div className=" bg-white pxpx mx2xl py-4 mt-6">
      <div className=" md:flex items-start justify-between">
        <div className=" mb-6 md:w-[20%]">
          <ul>
            <li className=" font-semibold text-2xl uppercase mb-4">
              USV UK LIMITED
            </li>
            <li className=" text-lg font-light">
              <span className=" font-semibold">Company No.</span> 06463435
            </li>
            <li className=" text-lg font-light">
              <span className=" font-semibold">Company Address:</span> Regus
              Woburn Place 16 Upper Worburn Place Euston London WC1H 0AF
            </li>
          </ul>
        </div>

        <div className=" mb-6 md:w-[20%]">
          <ul>
            <li className=" font-semibold text-2xl uppercase mb-4">Links</li>
            <li className=" text-lg font-light">
              <h1 onClick={(e) => smoothScrollToSection(e, 'home', 0)} className=' cursor-pointer hover:text-blue-500 duration-500'>Home</h1>
            </li>
            <li className=" text-lg font-light">
              <h1 onClick={(e) => smoothScrollToSection(e, 'shop', 0)} className=' cursor-pointer hover:text-blue-500 duration-500'>Shop</h1>
              {/* <Link to={'/shop'}>Shop</Link> */}
            </li>
            <li className=" text-lg font-light">
              {/* <h1 onClick={(e) => smoothScrollToSection(e, 'shop', 0)} className=' cursor-pointer hover:text-blue-500 duration-500'>About</h1> */}
              <Link to={'/about'}>About</Link>
            </li>
            <li className=" text-lg font-light">
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className=" mb-6 md:w-[20%]">
          <ul>
            <li className=" font-semibold text-2xl uppercase mb-4">
              Categories
            </li>
            <li className=" text-lg font-light">
              <Link to={'/shop'}>Cosmetics</Link>
            </li>
            <li className=" text-lg font-light">
              <Link to={'/shop'}>Accessories</Link>
            </li>
          </ul>
        </div>

        <div className=" mb-6 flex items-start justify-start">
          <Link to={''} className=" text-4xl mx-4">
            <FacebookOutlinedIcon />
          </Link>
          <Link to={''} className=" text-4xl mx-4">
            <InstagramIcon />
          </Link>
          <Link to={''} className=" text-4xl mx-4">
            <XIcon />
          </Link>
          <Link to={''} className=" text-4xl mx-4">
            <MailOutlineIcon />
          </Link>
        </div>
      </div>
      {/* <div className=" text-center mb-4">
        <p>All Rights Reserved By @USV UK LIMITED</p>
      </div> */}
    </div>
  );
};

export default Footer;
