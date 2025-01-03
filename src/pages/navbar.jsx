import React, { useState } from 'react';
import mtslogo from '../assets/mtslogo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser, useClerk } from '@clerk/clerk-react';
import '../styles/navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { openSignIn } = useClerk(); // Clerk hook to open the sign-in modal
    const navigate = useNavigate();  // Hook to navigate programmatically
    const { isSignedIn } = useUser(); // Use Clerk's useUser hook to check if the user is signed in

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Handle redirect to Product or trigger login popup
    const handleProductClick = () => {
        if (isSignedIn) {
            // If the user is signed in, navigate to the product page
            navigate('/product');
        } else {
            // If the user is not signed in, show the sign-in modal
            openSignIn(); // This will open the Clerk's sign-in modal
        }
    };

    return (
        <header className="external bg-white shadow-md fixed w-100">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                            <Link className='flex items-center gap-2' to="/" smooth={true} offset={-70} duration={500}>
                                <img className="h-12 w-auto object-contain" src={mtslogo} alt='MTSLOGO' />
                                <p className='text-3xl' >Code IT</p>
                            </Link>
                        </div>
                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <ScrollLink
                                        className="text-gray-500 text-lg font-medium tracking-wider transition hover:text-black cursor-pointer"
                                        to="home"
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Home
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        className="text-gray-500 text-lg font-medium tracking-wider transition hover:text-black cursor-pointer"
                                        to="about"
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        About
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        className="text-gray-500 text-lg font-medium tracking-wider transition hover:text-black cursor-pointer"
                                        to="docs"
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Docs
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        className="text-gray-500 text-lg font-medium tracking-wider transition hover:text-black cursor-pointer"
                                        to="faq"
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        FAQ
                                    </ScrollLink>
                                </li>
                                <li>
                                    <button
                                        onClick={handleProductClick}  // Use the new click handler here
                                        className="text-gray-500 text-lg font-medium tracking-wider transition hover:text-black cursor-pointer"
                                    >
                                        Product
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            {/* Clerk Authentication Button */}
                            <SignedOut>
                                <SignInButton>
                                    <button className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white shadow cursor-pointer">
                                        Login
                                    </button>
                                </SignInButton>
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>

                        <div className="block md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 cursor-pointer"
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
                    className={`fixed inset-0 bg-black transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} md:hidden`}
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
                    <ul className="flex flex-col items-end bg-black text-white mt-8 space-y-6">
                        <li className="w-full">
                            <ScrollLink
                                className="block px-4 py-2 text-lg hover:bg-gray-700 cursor-pointer"
                                to="home"
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={closeMenu}
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li className="w-full">
                            <ScrollLink
                                className="block px-4 py-2 text-lg hover:bg-gray-700 cursor-pointer"
                                to="about"
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={closeMenu}
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li className="w-full">
                            <ScrollLink
                                className="block px-4 py-2 text-lg hover:bg-gray-700 cursor-pointer"
                                to="docs"
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={closeMenu}
                            >
                                Docs
                            </ScrollLink>
                        </li>
                        <li className="w-full">
                            <ScrollLink
                                className="block px-4 py-2 text-lg hover:bg-gray-700 cursor-pointer"
                                to="faq"
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={closeMenu}
                            >
                                FAQ
                            </ScrollLink>
                        </li>
                        <li className="w-full ">
                            <ScrollLink onClick={closeMenu}>
                                <button
                                    onClick={handleProductClick}  // Use the new click handler here
                                    className="block px-4 py-2 text-lg hover:bg-gray-700 cursor-pointer"
                                >
                                    Product
                                </button>
                            </ScrollLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
