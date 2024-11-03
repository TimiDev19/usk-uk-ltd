import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';

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
              <Link to={'/'}>Home</Link>
            </li>
            <li className=" text-lg font-light">
              <Link to={'/shop'}>Shop</Link>
            </li>
            <li className=" text-lg font-light">
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

      <div className=' w-full h-[70px] text-center bg-blue-500 text-[#fffaf6] flex items-center justify-center'>
        <h1 className=' flex'>
          Copyright©2024 All rights reserved. Developed by
          <Link
            target='blank'
            to={"https://oluwatimilehin-eportfolio.vercel.app/"}
            className="relative cursor-pointer group w-fit mx-2"
          >
            <p>TIMI</p>
            <div className="absolute bottom-0 h-px w-full bg-[#fffaf6] scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
          </Link>
          and
          <Link
            target='blank'
            to={"https://emmanuelayeniko.netlify.app/"}
            className="relative cursor-pointer group w-fit mx-2"
          >
            <p>NIKO</p>
            <div className="absolute bottom-0 h-px w-full bg-[#fffaf6] scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
          </Link>
          in partnership with 
          <Link
            to={"/"}
            className="relative cursor-pointer group w-fit mx-2"
          >
            <p>USV UK LIMITED</p>
            <div className="absolute bottom-0 h-px w-full bg-[#fffaf6] scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
