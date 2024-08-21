import { Link } from "react-router-dom"
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import products from "../helpers/products";


const Landingpage = () => {
    const bestSellingProducts = products.items.filter(item => {
        return item.type === "bestSeller"
    })

    const featuredProducts = products.items.filter(item => {
        return item.type === "featured"
    })
    return (
        <div>
            <div className=' h-[60vh] md:h-[70vh] mb-6 home-bg flex items-center sm:justify-start justify-center text-center sm:px-5'>
                <div className=" w-full sm:w-[40%] md:w-[50%] sm:text-left">
                    <h1 className=' uppercase text-4xl md:text-7xl font-bold text-white mb-6 md:mb-10'>wear clothes that matter</h1>
                    <Link to={''} className=" capitalize py-4 px-10 bg-blue-500 text-white font-semibold hover:bg-blue-300 duration-500">shop now</Link>
                </div>
            </div>

            <div className=" w-[100vw] mb-10 md:px-4">
                <h1 className=" uppercase font-semibold text-black text-3xl sm:text-4xl mb-6">Best seller</h1>
                <div className=" w-full px-3 flex flex-col md:flex-row">
                    {
                        bestSellingProducts.map((item, index) => (
                            <div key={index} className=" w-[95%] md:w-[22%] cursor-pointer duration-500 m-auto h-[400px] border border-slate-300 rounded-lg mb-6">
                                <img src={item.image} alt={item.name} className=" w-full rounded-t-lg" />
                                <h1 className=" mx-4">{item.name}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className=" exclusive-bg w-[100vw] py-5 px-3  h-fit md:h-[65vh] mb-10 flex items-center md:items-end justify-start">
                <div className=" md:w-[50%] mb-6">
                    <h1 className=" font-semibold text-4xl md:text-5xl text-white mb-4">USV Exclusive Deal</h1>
                    <p className=" font-thin text-white w-[65%] mb-4 md:text-xl">
                        USV Exclusives. Elevate your wardrobe with premium brands, where luxury meets fashion. Immerse yourself in a world of unparalleled elegance. Explore now!
                    </p>
                    <Link to={''} className=" text-white md:text-xl hover:border-b-2 hover:border-white duration-500 pb-2">Visit Shop <ArrowRightAltOutlinedIcon /></Link>
                </div>
            </div>

            <div className=" w-[100vw] mb-10 md:px-4">
                <h1 className=" uppercase font-semibold text-black text-3xl sm:text-4xl mb-6">Featured</h1>
                <div className=" w-full px-3 flex flex-col md:flex-row">
                    {
                        featuredProducts.map((item, index) => (
                            <div key={index} className=" w-[95%] md:w-[22%] cursor-pointer duration-500 m-auto h-[400px] border border-slate-300 rounded-lg mb-6">
                                <img src={item.image} alt={item.name} className=" w-full rounded-t-lg" />
                                <h1 className=" mx-4">{item.name}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className=" w-full px-6">
                <div className=" flex flex-col items-center justify-between sm:flex-row mb-4 md:mb-6">
                    <h1 className=" uppercase font-semibold text-black text-3xl sm:text-4xl mb-6">SHOP</h1>
                    <Link to={''} className=" capitalize py-4 px-10 bg-blue-500 text-white font-semibold hover:bg-blue-300 duration-500">visit shop</Link>
                </div>
                <div className=" flex flex-col items-center justify-between sm:flex-row mb-4 md:mb-6">
                    <div className="home-bg mb-6 h-[50vh] md:h-[65vh] w-[95%] md:w-[45%] p-3 m-auto bg-red-700 flex items-end justify-start">
                        <h1 className=" text-white font-semibold text-xl">Men</h1>
                    </div>
                    <div className="exclusive-bg mb-6 h-[50vh] md:h-[65vh] w-[95%] md:w-[45%] p-3 m-auto bg-red-700 flex items-end justify-start">
                        <h1 className=" text-white font-semibold text-xl">Women</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage
