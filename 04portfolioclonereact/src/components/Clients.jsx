import React from 'react'

const Clients = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8'>
            <div className="heading text-base lg:text-[16px] text-[rgb(38, 50, 56)] font-semibold">
                My awesome clients
            </div>

            <div className="clientImages grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center justify-center gap-4 sm:gap-6 w-full">
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-coinbase.svg" alt="Coinbase" className='w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] cursor-pointer mx-auto' />
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-spotify.svg" alt="Spotify" className='w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] cursor-pointer mx-auto' />
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-pinterest.svg" alt="Pinterest" className='w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] cursor-pointer mx-auto' />
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-google.svg" alt="Google" className='w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] cursor-pointer mx-auto' />
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-amazon.svg" alt="Amazon" className='w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] cursor-pointer mx-auto' />
                <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-netflix.svg" alt="Netflix" className='w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] cursor-pointer mx-auto' />
            </div>
        </div>
    )
}

export default Clients