import React from "react";
const Card = () => {
    return ( 
        <>
            <section className="text-gray-600 body-font mb-0 p-0" id="home">
                <div className="container px-5 py-0 mx-auto mb-0 p-0">
                    <div className="flex flex-wrap -m-4 mb-0">
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h1 className="title-font m:text-3xl text-3xl font-medium text-gray-900 mb-4 ">Inspire</h1>
                                <p className="leading-relaxed mb-3">To inspire, motivate and encourage students to learn, create and help build a better society
                                    and  help them innovate and let them integrate to build the next generation humankind.
                                </p>
                                <a className="text-indigo-500 inline-flex items-center">Learn More</a>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h1 className="title-font m:text-3xl text-3xl font-medium text-gray-900 mb-4 ">Innovate</h1>
                                <p className="leading-relaxed mb-3">A world of enabled and connected little minds, building future.
                                    To teach new ways of thinking, to innovate and solve the problems on their own.
                                </p>
                                <a className="text-indigo-500 inline-flex items-center">Learn More</a>
                            </div>
                        </div>

                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h1 className="title-font m:text-3xl text-3xl font-medium text-gray-900 mb-4 ">Integrate</h1>
                                <p className="leading-relaxed mb-3">To let the students integrate, and help each other, learn from each other and do well together.
                                and help students through our programmes to inspire and integrate them, using innovative ways.
                                </p>
                                <a className="text-indigo-500 inline-flex items-center">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card;