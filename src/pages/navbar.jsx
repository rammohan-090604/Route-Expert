import React, { useState } from 'react';
import mtslogo from '../assets/mtslogo.png';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="external bg-opacity-70 shadow-md fixed w-100">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link to="/">
                        <img className="h-14 w-auto object-contain" src={mtslogo} alt='MTSLOGO' />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li><Link className="text-gray-500 text-lg font-medium tracking-wider transition hover:text-blue-700" to="/">Home</Link></li>
                                <li><Link className="text-gray-500 text-lg font-medium tracking-wider transition hover:text-blue-700" to="/about">About</Link></li>
                                <li><Link className="text-gray-500 text-lg font-medium tracking-wider transition hover:text-blue-700" to="/courses">Courses</Link></li>
                                <li><Link className="text-gray-500 text-lg font-medium tracking-wider transition hover:text-blue-700" to="/faq">FAQ</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link
                                className="rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white shadow"
                                to="/contactus"
                            >
                                Contact
                            </Link>
                        </div>

                        <div className="block md:hidden">
                            <button 
                                onClick={toggleMenu} 
                                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                            >
                                {isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <nav
                    aria-label="Global"
                    className={`fixed inset-0 bg-blue-600 transition-transform transform ${
                        isOpen ? 'translate-y-0' : 'translate-y-full'
                    } md:hidden`}
                >
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMenu} className="text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col items-end bg-blue-600 text-white mt-8 space-y-6">
                        <li className="w-full">
                            <Link className="block px-4 py-2 text-lg hover:bg-blue-700" to="/" onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="w-full">
                            <Link className="block px-4 py-2 text-lg hover:bg-blue-700" to="/about" onClick={closeMenu}>About</Link>
                        </li>
                        <li className="w-full">
                            <Link className="block px-4 py-2 text-lg hover:bg-blue-700" to="/courses" onClick={closeMenu}>Courses</Link>
                        </li>
                        <li className="w-full">
                            <Link className="block px-4 py-2 text-lg hover:bg-blue-700" to="/faq" onClick={closeMenu}>FAQ</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
