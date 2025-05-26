import React from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
    return (
        <>
            <div className='max-w-full flex justify-around items-center bg-black text-white'>
                <div className='max-w-full p-4 flex justify-center items-center'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="58px" viewBox="0 -960 960 960" width="58px" fill="#ffffff"><path d="M120-840h330v330H120v-330Zm60 59v188-188Zm330-59h330v330H510v-330Zm83 59v188-188ZM120-450h330v330H120v-330Zm60 81v189-189Zm465-81h60v135h135v60H705v135h-60v-135H510v-60h135v-135Zm-75-330v210h210v-210H570Zm-390 0v210h210v-210H180Zm0 390v210h210v-210H180Z" /></svg>
                    </div>
                    <div>
                        <h1 className='text-3xl font-extrabold flex justify-center items-center'>
                            Karan Aggarwal</h1>
                        <h2 className='font-bold animate-pulse'>Leave the accounting to me</h2>
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-xl'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }   
                            >
                                Home
                            </NavLink>
                        </li>
                        <li><NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            About
                        </NavLink></li>
                        <li><NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Services
                        </NavLink></li>
                        <li><NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Contact
                        </NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
