const Aboutpage = () => {
    return (
        <div className=" w-[100vw]">
            <div className=" w-full h-[80vh] md:h-[90vh]">
                <div className=" h-1/2 flex items-center justify-center">
                    <div className=" text-center">
                        <h1 className=" font-bold text-4xl md:text-8xl mb-6">About Us</h1>
                        <p className=" font-light text-2xl">A little insigt into USV UK Limited</p>
                    </div>
                </div>
                <div className=" h-1/2 about-bg"></div>
            </div>
            <div className=" w-full flex items-center justify-center py-4 mb-6">
                <p className=" text-xl m-auto w-[80%] sm:text-center md:text-4xl md:py-4">
                USV UK Limited is a trusted provider of high-quality medical products, dedicated to enhancing healthcare across the globe. With a commitment to innovation, reliability, and patient safety, we offer a wide range of medical devices and solutions designed to meet the needs of healthcare professionals and institutions. Our products are rigorously tested and compliant with international standards, ensuring that you receive only the best in medical care. Partner with USV UK Limited for cutting-edge medical solutions that make a difference in patient outcomes. Your health is our priority.
                </p>
            </div>
        </div>
    )
}

export default Aboutpage