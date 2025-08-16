import React, { useState } from 'react'

const ClientResponseCard = ({ img, title, innerText, name, marketingText = "Marketing @ APPLE INC.", extraClass = "" }) => {

    const [selectedImage, setSelectedImage] = useState(img)

    const smallImages = [
        "https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar1.jpg",
        "https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar2.jpg",
        "https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/avatar3.jpg"
    ]

    return (
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[200px] w-full ${extraClass}`}>

            {/* Text Section */}
            <div className={`flex flex-col justify-center items-start gap-4 w-full lg:w-auto text-center lg:text-left ${extraClass}`}>

                <div className={`text-2xl sm:text-3xl lg:text-[30px] font-bold text-[rgb(38,50,56)] leading-tight lg:leading-[41.25px]`}
                    dangerouslySetInnerHTML={{ __html: title }}>
                </div>

                <div
                    className={`text-[#9e9e9e] text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed lg:leading-[26px] max-w-lg ${extraClass}`}
                    dangerouslySetInnerHTML={{ __html: innerText }}
                >
                </div>

                <div className={`text-sm sm:text-base lg:text-[16px] text-[rgb(38,50,56)] leading-relaxed lg:leading-[26px] ${extraClass} font-semibold`}
                    dangerouslySetInnerHTML={{ __html: name }}>
                </div>

                <div className={`text-xs sm:text-sm lg:text-[14px] text-[#9e9e9e] leading-7`}>
                    {marketingText}
                </div>

                {/* Small Thumbnails */}
                <div className='allImages flex flex-row gap-3 lg:gap-4 items-start justify-center lg:justify-start'>
                    {smallImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt="thumbnail"
                            className={`h-8 w-8 sm:h-10 sm:w-10 lg:h-10 lg:w-10 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${selectedImage === image ? 'opacity-100 border-2 border-gray-500' : 'opacity-40'}`}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>
            </div>

            {/* Big Image */}
            <div className="image w-full lg:w-auto flex justify-center">
                <img
                    src={selectedImage}
                    alt={`${title}`}
                    className='h-[250px] sm:h-[300px] lg:h-[336px] w-[200px] sm:w-[250px] lg:w-[300px] object-cover rounded-lg shadow-lg transition-all duration-500'
                />
            </div>
        </div >
    )
}

export default ClientResponseCard