import React from 'react'

const ProjectCard = ({ img, title, description, buttonText = "SEE DETAILS", extraClass = "" }) => {
    return (
        <div className={`project flex flex-col justify-center items-start w-full ${extraClass}`}>
            <img src={img} alt={title} className='h-[160px] sm:h-[180px] lg:h-[192px] rounded-lg object-cover w-full' />
            <div className="name mt-5">
                <h2 className='text-lg sm:text-xl lg:text-[20px] font-semibold text-[rgb(38,50,56)] leading-tight lg:leading-[27.5px]'>
                    {title}
                </h2>
            </div>
            <div className="text mt-2">
                <p
                    className='text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed lg:leading-[26px] text-[#9e9e9e] text-justify'
                    dangerouslySetInnerHTML={{ __html: description }}
                ></p>
            </div>
            <div className='button mt-7'>
                <button type="button" className='px-5 py-2 rounded-lg shadow-lg bg-[#333] active:bg-black duration-300 text-white text-xs lg:text-[12px] font-bold'>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default ProjectCard