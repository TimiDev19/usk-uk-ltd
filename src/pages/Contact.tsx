

const Contact = () => {
    return (
        <div className=" w-[100vw] py-10 lg:py-20">
            <div className=" w-full h-[50vh] about-bg flex items-center justify-center text-white">
                <div className=" h-1/2 flex items-center justify-center">
                    <div className=" text-center">
                        <h1 className=" font-bold text-4xl md:text-8xl mb-6 uppercase">
                            Contact Us
                        </h1>
                        <p className=" font-light text-2xl">
                            Reach out to us at USV UK Limited
                        </p>
                    </div>
                </div>
                {/* <div className=" h-1/2 about-bg"></div> */}
            </div>


            <div className=" mb-6 w-full h-fit lg:h-[90vh] flex items-center justify-center bg-slate-100 pb-6">
                <div className=" w-[80%] h-fit lg:h-[97%] mt-6 bg-white flex flex-col lg:flex-row items-center justify-between rounded-md shadow-md shadow-slate-300">
                    <div className=" w-full lg:w-[50%] contact-bg h-[40vh] lg:h-full lg:rounded-l-md"></div>
                    <div className=" w-[90%] m-auto mt-6 lg:w-[50%] h-full flex items-center justify-center">
                        <form action="" className=" w-[80%] m-auto h-[50%] lg:h-[90%]">
                            <h1 className=" text-3xl lg:text-4xl font-bold">Contact Us</h1>
                            <p className=" mt-4 font-light">If you have any questions please fell free to contact with us.</p>

                            <div className=" flex flex-col lg:flex-row items-center justify-between mt-6">
                                <input type="text"
                                    placeholder="Name"
                                    required
                                    className=" w-full mb-4 lg:mb-0 lg:w-[45%] border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-blue-700 focus:border-2 rounded-md"
                                />

                                <input type="email"
                                    placeholder="Email"
                                    required
                                    className=" w-full mb-4 lg:mb-0 lg:w-[45%] border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-blue-700 focus:border-2 rounded-md"
                                />
                            </div>

                            <div className=" flex flex-col lg:flex-row items-center justify-between lg:mt-6">
                                <input type="text"
                                    placeholder="Phone number"
                                    required
                                    className=" w-full mb-4 lg:mb-0 lg:w-[45%] border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-blue-700 focus:border-2 rounded-md"
                                />

                                <input type="email"
                                    placeholder="Subject"
                                    required
                                    className=" w-full mb-4 lg:mb-0 lg:w-[45%] border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-blue-700 focus:border-2 rounded-md"
                                />
                            </div>

                            <textarea name="" id="" cols={30} rows={10}
                                placeholder="Message"
                                required
                                className=" w-full lg:mt-6 border border-slate-300 px-2 py-3 placeholder:text-sm focus:outline-none focus:border-blue-700 focus:border-2 rounded-md"
                            ></textarea>

                            <button className=" w-full py-4 text-white bg-blue-600 mt-4 rounded-md mb-5">Send</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact