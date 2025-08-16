import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between border-t border-[#e8e8e8] pt-5 mx-4 sm:mx-6 md:mx-8 lg:mx-[100px] gap-4 lg:gap-0'>
            <div className='order-2 lg:order-1'>
                <p className='text-sm lg:text-[16px] font-normal text-[#9e9e9e] leading-relaxed lg:leading-[26px] text-center lg:text-left'>
                    © 2025 Made with Material Tailwind by Creative Tim. Distributed by ThemeWagon
                </p>
            </div>
            <div className='order-1 lg:order-2'>
                <ul className="footerList flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
                    <li className='text-sm lg:text-base cursor-pointer hover:text-gray-600 transition-colors'>Home</li>
                    <li className='text-sm lg:text-base cursor-pointer hover:text-gray-600 transition-colors'>About Us</li>
                    <li className='text-sm lg:text-base cursor-pointer hover:text-gray-600 transition-colors'>Blog</li>
                    <li className='text-sm lg:text-base cursor-pointer hover:text-gray-600 transition-colors'>Service</li>
                    <li>
                        <button
                            type="submit"
                            className="bg-black text-white py-3 rounded-lg shadow-lg active:bg-[#333] duration-300 w-full sm:w-[154.688px] text-xs lg:text-[16px] font-bold leading-4"
                        >
                            SUBSCRIBE
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer