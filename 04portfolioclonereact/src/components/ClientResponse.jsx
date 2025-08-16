import React from 'react'
import ClientResponseCard from './ClientResponseCard'

const ClientResponse = () => {
    const clientResponse = [
        {
            img: "https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar3.jpg",
            title: "Mobile App <br /> Development",
            innerText: "I had the pleasure of working with Lily on a critical web <br /> development project, and I can confidently say that <br /> their expertise and professionalism exceeded my <br /> expectations",
            name: "Michael - Technical Manager",
            extraClass: ""
        },
    ]

    return (
        <div className="py-12 sm:py-16 lg:py-[100px] px-4 sm:px-6 md:px-8 lg:px-[40px] max-w-[1200px] mx-auto">
            {/* Heading */}
            <div className='clientResponseheading flex flex-col gap-4 justify-center items-center'>
                <h2 className='text-3xl sm:text-4xl lg:text-[36px] text-[rgb(38,50,56)] font-semibold leading-tight lg:leading-[46.8px] text-center'>
                    What Clients Say
                </h2>
                <p className='font-normal text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[32.5px] text-center text-[#9e9e9e] max-w-3xl'>
                    Discover what clients have to say about their experiences working <br className='hidden sm:block' />
                    with me. My client's satisfaction is my greatest achievement!
                </p>
            </div>

            {/* Cards */}
            <div className='flex flex-row justify-center mt-12 lg:mt-[100px] px-0 lg:px-[90px]'>
                {clientResponse.map((item, index) => (
                    <ClientResponseCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        innerText={item.innerText}
                        name={item.name}
                        extraClass={item.extraClass}
                    />
                ))}
            </div>
        </div>
    )
}

export default ClientResponse