import React from 'react'
import Navbar from '../Navbar/Navbar'
import ResumeImage from '../../assets/ResumeImage.jpg';
const Homepage = () => {
    return (
        <>
            <Navbar />
            <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                    <div className="text-left">
                        <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-800 sm:text-3xl sm:leading-none md:text-5xl">
                            Create a Professional Resume in Minutes
                        </h2>
                        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Our resume builder makes it easy to craft a winning resume that showcases your skills and experience.
                        </p>
                        <div className="mt-5 sm:flex md:mt-8">
                            <div className="rounded-md shadow">
                                <a href="create-resume"
                                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-purple-700 border border-transparent rounded-md hover:bg-purple-800 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                    Get started
                                </a>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <a href=""
                                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:bg-gray-100 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                    View Github
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                    <div className="relative w-full p-3 rounded md:p-8">
                        <div className="rounded-lg bg-white text-black w-full">
                            <img src={ResumeImage} alt="Professional Resume Example" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
