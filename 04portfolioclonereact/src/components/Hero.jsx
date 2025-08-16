import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [userEmail, setUserEmail] = useState("")
    const [allUserEmails, setAllUserEmails] = useState(() => {
        return JSON.parse(localStorage.getItem("allUserEmails")) || []
    })
    useEffect(() => {
        localStorage.setItem("allUserEmails", JSON.stringify(allUserEmails))
    }, [allUserEmails])

    const requireOfferThroughEmail = () => {
        if (!userEmail.trim()) {
            alert("Please Enter Email Id First")
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userEmail)) {
            alert("Please enter a valid email address");
            return;
        }
        const userDetails = {
            UserId: Date.now(),
            EmailId: userEmail
        }
        setAllUserEmails(prev => {
            const updated = [...prev, userDetails];
            console.log("Someone is Requiring Offer Through Email. Details:", updated);
            return updated;
        });

        alert("Your Message Sent")

        setUserEmail("")
    }
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-3 px-4 sm:px-6 md:px-8 lg:px-[100px] py-[20px] max-w-[1500px] mx-auto'>
            <div className='heading flex flex-col gap-4 w-full lg:w-auto'>
                <div>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold leading-tight lg:leading-[60px] text-center lg:text-left'>
                        Welcome to my Web <br className='hidden lg:block' />
                        Development Portofolio!
                    </h2>
                </div>

                <div>
                    <p className='text-base sm:text-lg md:text-xl lg:text-[20px] text-[#9e9e9e] font-normal leading-relaxed lg:leading-[32.5px] text-center lg:text-left'>
                        I'm Lily Smith, a passionate web developer based in USA. <br className='hidden lg:block' />
                        Here, you'll get a glimpse of my journey in the world of web <br className='hidden lg:block' />
                        development, where creativity meets functionality
                    </p>
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-sm lg:text-[14px] text-black leading-[21px] text-center lg:text-left'>
                        Your Email
                    </h2>
                    <div className='flex flex-col sm:flex-row items-center gap-3'>
                        <input
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            type="email"
                            className='px-4 py-2 text-base lg:text-[16px] border border-[#333] rounded-lg w-full sm:w-[300px] md:w-[350px] lg:w-[400px]'
                            placeholder='Enter your email'
                        />

                        <button
                            onClick={requireOfferThroughEmail}
                            type="button"
                            className='text-xs lg:text-[12px] font-bold leading-4 bg-[#333] text-white duration-300 px-5 py-3 rounded-lg active:bg-black active:shadow-lg w-full sm:w-auto whitespace-nowrap'>
                            REQUIRE OFFER
                        </button>
                    </div>
                </div>

                <div>
                    <p className='text-sm lg:text-[14px] text-[#9e9e9e] font-normal leading-relaxed lg:leading-[32.5px] text-center lg:text-left'>
                        Read my <span className='underline cursor-pointer'>Terms and conditions</span>
                    </p>
                </div>
            </div>

            <div className="heroImage w-full lg:w-auto flex justify-center">
                <img
                    src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/image-7.svg"
                    alt="Hero Image"
                    className='rounded-lg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[576px] object-cover w-full sm:w-[400px] md:w-[500px] lg:w-[600px] max-w-full'
                />
            </div>
        </div>
    )
}

export default Hero