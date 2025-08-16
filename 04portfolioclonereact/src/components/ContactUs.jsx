import React from 'react'
import ContactUsCard from './ContactUsCard'

const ContactUs = () => {
    return (
        <div className='flex flex-col items-center justify-center px-4 sm:px-6 md:px-8'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h2 className='text-[rgb(38,50,56)] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-center font-semibold leading-tight lg:leading-[60px]'>
                    Contact Us
                </h2>
                <p className='text-center text-[#9e9e9e] text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[32.5px] max-w-3xl'>
                    Ready to get started? Feel free to reach out through the <br className='hidden sm:block' /> contact form, and let's embark on a journey of innovation and <br className='hidden sm:block' /> success.
                </p>
            </div>
            <div className='mt-12 lg:mt-[60px] w-full'>
                <ContactUsCard />
            </div>
        </div>
    )
}

export default ContactUs