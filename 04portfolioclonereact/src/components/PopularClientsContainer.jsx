import React from 'react'

const PopularClientsContainer = () => {
    return (
        <div className='flex flex-col items-center justify-center px-4 sm:px-6 md:px-8'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <p className='text-sm sm:text-base lg:text-[16px] font-semibold leading-[26px] text-[#9e9e9e]'>
                    POPULAR CLIENTS
                </p>
                <h2 className='text-3xl sm:text-4xl lg:text-[36px] leading-tight lg:leading-[46.8px] text-[rgb(38,50,56)] font-semibold text-center'>
                    Trusted by over 10,000+ <br />
                    clients
                </h2>
            </div>

            <div className='mt-6 lg:mt-[22px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-center items-center gap-4 sm:gap-6 w-full max-w-6xl'>
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-coinbase.svg" alt="Coinbase" className='w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] cursor-pointer grayscale filter mx-auto' />
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-spotify.svg" alt="Spotify" className='w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] cursor-pointer grayscale filter mx-auto' />
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-pinterest.svg" alt="Pinterest" className='w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] cursor-pointer grayscale filter mx-auto' />
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-google.svg" alt="Google" className='w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] cursor-pointer grayscale filter mx-auto' />
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-amazon.svg" alt="Amazon" className='w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] cursor-pointer grayscale filter mx-auto' />
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-netflix.svg" alt="Netflix" className='w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] cursor-pointer grayscale filter mx-auto' />
            </div>
        </div>
    )
}

export default PopularClientsContainer