import React from 'react'

const ResumeContainer = () => {
    return (
        <div className='max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[130px] relative overflow-hidden'>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-indigo-100/40 to-transparent rounded-3xl"></div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>

            <div className='relative flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16 py-16 lg:py-20'>
                {/* Left Section - Resume Info */}
                <div className="resumeSection flex flex-col items-center lg:items-start gap-6 w-full lg:w-1/2 text-center lg:text-left relative z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full">
                        <span className="text-sm font-semibold text-purple-700">✨ Professional Experience</span>
                    </div>

                    <div className="heading">
                        <h2 className='text-4xl sm:text-5xl lg:text-[48px] leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900'>
                            My Resume
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 mx-auto lg:mx-0"></div>
                    </div>

                    <div className="resumePara">
                        <p className='text-lg lg:text-xl font-medium text-gray-600 leading-relaxed max-w-2xl'>
                            Highly skilled and creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold">Web Developer</span> with 5+ years of experience in crafting visually stunning and functionally robust websites and web applications.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <button type="button" className='group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                            <span className="relative z-10">VIEW RESUME</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </button>

                        <button type="button" className='px-8 py-4 border-2 border-purple-300 text-purple-700 font-bold rounded-xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105'>
                            DOWNLOAD CV
                        </button>
                    </div>
                </div>

                {/* Right Section - Achievements */}
                <div className="otherSection w-full lg:w-1/2 relative z-10">
                    <div className="grid grid-cols-1 gap-6">
                        {/* Achievement Card 1 */}
                        <div className='group flex flex-row items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1'>
                            <div className='bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg p-4 group-hover:shadow-xl transition-all duration-300'>
                                <img src="https://cdn-icons-png.flaticon.com/128/39/39934.png" alt="Education" className='filter invert h-6 w-6' />
                            </div>
                            <div className='flex-1'>
                                <h3 className='text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300'>
                                    Bachelor of Science
                                </h3>
                                <p className='text-gray-600 text-sm'>Computer Science • 2018-2022</p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            </div>
                        </div>

                        {/* Achievement Card 2 */}
                        <div className='group flex flex-row items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1'>
                            <div className='bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg p-4 group-hover:shadow-xl transition-all duration-300'>
                                <img src="https://cdn-icons-png.flaticon.com/128/208/208761.png" alt="Certification" className='filter invert h-6 w-6' />
                            </div>
                            <div className='flex-1'>
                                <h3 className='text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300'>
                                    Certified Web Developer
                                </h3>
                                <p className='text-gray-600 text-sm'>Full Stack Development • 2022</p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            </div>
                        </div>

                        {/* Achievement Card 3 */}
                        <div className='group flex flex-row items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1'>
                            <div className='bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg p-4 group-hover:shadow-xl transition-all duration-300'>
                                <img src="https://cdn-icons-png.flaticon.com/128/1536/1536550.png" alt="Framework" className='filter invert h-6 w-6' />
                            </div>
                            <div className='flex-1'>
                                <h3 className='text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300'>
                                    Frontend Framework Expert
                                </h3>
                                <p className='text-gray-600 text-sm'>React • Vue • Angular • 2023</p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
                                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">5+</div>
                                <div className="text-xs text-gray-600">Years Exp</div>
                            </div>
                            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
                                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">50+</div>
                                <div className="text-xs text-gray-600">Projects</div>
                            </div>
                            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
                                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">100%</div>
                                <div className="text-xs text-gray-600">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeContainer