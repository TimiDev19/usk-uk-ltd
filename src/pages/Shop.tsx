import products from "../helpers/products";

const Shop = () => {
  return (
    <div className="pt-[120px]">
            <h1 className=" font-bold mb-6 mx-4 text-5xl">View our products !</h1>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 w-[100vw]">

                {
                    products.items.map((item, index) => (
                        <div key={index} className="relative group w-[95%]  cursor-pointer duration-500 m-auto min-h-[400px] border border-slate-300 rounded-lg mb-6">
                            <div>
                                <img src={item.image} alt={item.name} className=" w-full rounded-t-lg" />
                                <h1 className=" mx-4">{item.name}</h1>
                                <h1 className=" mx-4 font-semibold text-green-600">{item.price}</h1>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <a href="#" className="text-black text-lg py-2 px-6 duration-500 hover:px-8 bg-white">Buy Now</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Shop
