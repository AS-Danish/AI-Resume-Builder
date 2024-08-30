import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons/faFile'
import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-white border-gray-200 w-full">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <FontAwesomeIcon icon={faFile} className='text-2xl text-purple-700' />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Resume Builder</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center"><a href="create-resume">Get started</a></button>
                    <button 
                        type="button" 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
                        aria-controls="navbar-cta" 
                        aria-expanded={isOpen} 
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-center ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white w-full text-center">
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
