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
                    USV UK Limited is a leading skincare brand dedicated to bringing you innovative and effective solutions for radiant, healthy skin. With a commitment to quality and science-backed formulations, our products are designed to cater to diverse skin types and concerns. At USV UK Limited, we believe in the power of nature combined with cutting-edge technology to deliver results you can see and feel. Elevate your skincare routine with us, and experience the confidence that comes with glowing, beautiful skin.
                </p>
            </div>
        </div>
    )
}

export default Aboutpage