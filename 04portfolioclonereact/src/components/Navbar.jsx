import React, { useState } from 'react'
import { RiPagesFill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
            <nav className="flex flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[100px] py-4 lg:py-[20px] max-w-[1500px] mx-auto">
                <div className="logo">
                    <h2 className='text-lg lg:text-[18px] font-bold leading-7 text-[#253237]'>
                        Material Tailwind
                    </h2>
                </div>

                {/* Desktop Navigation */}
                <div className="navItems hidden md:flex flex-row items-center gap-3">
                    <div className='flex flex-row items-center gap-2 cursor-pointer'>
                        <RiPagesFill style={{ fontSize: "20px" }} />
                        <h2 className='text-base lg:text-[16px] leading-[26px] font-medium text-[rgb(33,33,33)]'>
                            Pages
                        </h2>
                    </div>
                    <div className='flex flex-row items-center gap-2 cursor-pointer'>
                        <MdAccountCircle style={{ fontSize: "20px" }} />
                        <h2 className='text-base lg:text-[16px] leading-[26px] font-medium text-[rgb(33,33,33)]'>
                            Accounts
                        </h2>
                    </div>
                    <div className='flex flex-row items-center gap-2 cursor-pointer'>
                        <IoTerminal style={{ fontSize: "20px" }} />
                        <h2 className='text-base lg:text-[16px] leading-[26px] font-medium text-[rgb(33,33,33)]'>
                            Docs
                        </h2>
                    </div>
                </div>

                {/* Desktop Buttons */}
                <div className="buttons hidden md:flex flex-row items-center gap-3">
                    <button
                        type="button"
                        className='text-xs lg:text-[12px] font-bold leading-4 bg-white hover:bg-gray-400 active:bg-gray-500 duration-300 px-5 py-3 active:rounded-lg active:shadow-lg hover:rounded-lg hover:shadow-lg'>
                        SIGN IN
                    </button>
                    <button
                        type="button"
                        className='text-xs lg:text-[12px] font-bold leading-4 bg-[#333] text-white duration-300 px-5 py-3 rounded-lg active:bg-black active:shadow-lg'>
                        BLOCKS
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
                        <div className="flex flex-col p-4 space-y-4">
                            <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                <RiPagesFill style={{ fontSize: "20px" }} />
                                <h2 className='text-base font-medium text-[rgb(33,33,33)]'>
                                    Pages
                                </h2>
                            </div>
                            <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                <MdAccountCircle style={{ fontSize: "20px" }} />
                                <h2 className='text-base font-medium text-[rgb(33,33,33)]'>
                                    Accounts
                                </h2>
                            </div>
                            <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                <IoTerminal style={{ fontSize: "20px" }} />
                                <h2 className='text-base font-medium text-[rgb(33,33,33)]'>
                                    Docs
                                </h2>
                            </div>
                            <div className="flex flex-col gap-3 pt-4 border-t">
                                <button
                                    type="button"
                                    className='text-xs font-bold leading-4 bg-white hover:bg-gray-400 active:bg-gray-500 duration-300 px-5 py-3 active:rounded-lg active:shadow-lg hover:rounded-lg hover:shadow-lg'>
                                    SIGN IN
                                </button>
                                <button
                                    type="button"
                                    className='text-xs font-bold leading-4 bg-[#333] text-white duration-300 px-5 py-3 rounded-lg active:bg-black active:shadow-lg'>
                                    BLOCKS
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar