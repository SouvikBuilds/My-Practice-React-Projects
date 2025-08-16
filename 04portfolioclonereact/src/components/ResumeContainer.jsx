import React from 'react'

const ResumeContainer = () => {
    return (
        <div className='max-w-[1500px] mx-auto flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-[130px] gap-8 lg:gap-0'>
            <div className="resumeSection flex flex-col items-start gap-3 w-full lg:w-auto text-center lg:text-left">
                <div className="heading">
                    <h2 className='text-3xl sm:text-4xl lg:text-[36px] leading-tight lg:leading-[46.8px] font-semibold text-[rgb(38,50,56)]'>
                        My Resume
                    </h2>
                </div>
                <div className="resumePara">
                    <p className='text-sm sm:text-base lg:text-[16px] font-normal text-[#9e9e9e] leading-relaxed lg:leading-[26px] max-w-lg'>
                        Highly skilled and creative Web Developer with 5+ years of <br className='hidden sm:block' /> experience in crafting visually stunning and functionally robust <br className='hidden sm:block' /> websites and web applications.
                    </p>
                </div>
                <div className="button">
                    <button type="button" className='px-5 py-3 bg-white hover:rounded-lg hover:shadow-lg hover:bg-gray-400 active:rounded-lg active:shadow-lg active:bg-gray-500 text-[rgb(33,33,33)] text-xs lg:text-[12px] font-bold leading-[16px] transition-all duration-300'>
                        VIEW MORE
                    </button>
                </div>
            </div>

            <div className="otherSection flex flex-col gap-4 lg:gap-3 cursor-pointer w-full lg:w-auto">
                <div className='flex flex-row items-center gap-3 lg:gap-2'>
                    <div className='bg-black rounded-lg shadow-lg p-3 lg:p-4 flex-shrink-0'>
                        <img src="https://cdn-icons-png.flaticon.com/128/39/39934.png" alt="Data" className='filter invert grayscale h-4 lg:h-5 cursor-pointer' />
                    </div>
                    <div className='flex-1'>
                        <p className='text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed lg:leading-[26px] text-[#9e9e9e]'>
                            Bachelor of Science in Computer Science
                        </p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-3 lg:gap-2'>
                    <div className='bg-black rounded-lg shadow-lg p-3 lg:p-4 flex-shrink-0'>
                        <img src="https://cdn-icons-png.flaticon.com/128/208/208761.png" alt="Puzzle" className='filter invert grayscale h-4 lg:h-5' />
                    </div>
                    <div className='flex-1'>
                        <p className='text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed lg:leading-[26px] text-[#9e9e9e]'>
                            Certified Web Developer
                        </p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-3 lg:gap-2'>
                    <div className='bg-black rounded-lg shadow-lg p-3 lg:p-4 flex-shrink-0'>
                        <img src="https://cdn-icons-png.flaticon.com/128/1536/1536550.png" alt="Mouse" className='filter invert grayscale h-4 lg:h-5' />
                    </div>
                    <div className='flex-1'>
                        <p className='text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed lg:leading-[26px] text-[#9e9e9e]'>
                            Frontend Framework Proficiency Certification
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeContainer