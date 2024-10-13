import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from './Logo';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-black border-gray-800 px-4 lg:px-6">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <Logo/>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-blue-500 border-2 border-blue-500 focus:ring-4 hover:border-blue-400 hover:text-blue-400 focus:ring-blue-500 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white border-2 border-blue-500 bg-blue-600 hover:bg-blue-700  focus:ring-4 focus:ring-blue-500 range-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:to-blue-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                           
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}