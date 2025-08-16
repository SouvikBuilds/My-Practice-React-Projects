import React from 'react'

const Skills = () => {
    return (
        <div className='flex flex-col justify-center items-center px-4 sm:px-6 md:px-8'>
            <div className="heading flex flex-col justify-center items-center gap-4">
                <p className='text-base lg:text-[16px] text-[rgb(38,50,56)] font-bold leading-[26px]'>
                    MY SKILLS
                </p>

                <div className='text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold leading-tight lg:leading-[60px] text-[rgb(38,50,56)] text-center'>
                    What I do
                </div>

                <div>
                    <p className='text-base sm:text-lg md:text-xl lg:text-[20px] text-[#9e9e9e] font-normal leading-relaxed lg:leading-[32.5px] text-center max-w-4xl'>
                        I'm not just a developer; I'm a digital dreamweaver. Crafting immersive online experiences is not just a job but my calling. <br className='hidden md:block' /> Discover below how I can help you.
                    </p>
                </div>
            </div>

            <div className="allSkills flex flex-col items-center justify-center gap-12 lg:gap-[100px] mt-12 lg:mt-[90px] w-full max-w-7xl">
                <div className="skills1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[100px] w-full">
                    <div className="skill flex flex-col justify-center items-center text-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/11743/11743979.png" alt="Web Development" className='h-8 sm:h-10 lg:h-[40px]' />

                        <div className="name mt-5">
                            <h2 className='text-lg sm:text-xl lg:text-[20px] font-semibold text-[rgb(38,50,56)] leading-tight lg:leading-[27.5px]'>
                                Frontend Web Development
                            </h2>
                        </div>
                        <div className="text mt-2">
                            <p className='text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed lg:leading-[26px] text-[#9e9e9e] text-center'>
                                Creating beautiful and functional web <br className='hidden sm:block' /> experiences is my forte. Using the latest <br className='hidden sm:block' /> technologies and best practices, I design and <br className='hidden sm:block' /> build websites that captivate and engage <br className='hidden sm:block' /> users.
                            </p>
                        </div>
                    </div>
                    <div className="skill flex flex-col justify-center items-center text-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/9797/9797287.png" alt="Fingerprint" className='h-8 sm:h-10 lg:h-[40px]' />

                        <div className="name mt-5">
                            <h2 className='text-lg sm:text-xl lg:text-[20px] font-semibold text-[rgb(38,50,56)] leading-tight lg:leading-[27.5px]'>
                                Mobile App Development
                            </h2>
                        </div>
                        <div className="text mt-2">
                            <p className='text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed lg:leading-[26px] text-[#9e9e9e] text-center'>
                                I specialize in creating responsive and <br className='hidden sm:block' /> intuitive mobile apps that work seamlessly <br className='hidden sm:block' /> across iOS & Android devices. From concept <br className='hidden sm:block' /> to deployment, I handle every stage of the <br className='hidden sm:block' /> development process.
                            </p>
                        </div>
                    </div>
                    <div className="skill flex flex-col justify-center items-center text-center md:col-span-2 lg:col-span-1">
                        <img src="https://cdn-icons-png.flaticon.com/128/17926/17926972.png" alt="Stack" className='h-8 sm:h-10 lg:h-[40px]' />

                        <div className="name mt-5">
                            <h2 className='text-lg sm:text-xl lg:text-[20px] font-semibold text-[rgb(38,50,56)] leading-tight lg:leading-[27.5px]'>
                                Technology Stack
                            </h2>
                        </div>
                        <div className="text mt-2">
                            <p className='text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed lg:leading-[26px] text-[#9e9e9e] text-center'>
                                I'm well-versed in the industry's most popular <br className='hidden sm:block' /> frontend technologies, including HTML5, <br className='hidden sm:block' /> CSS3, JavaScript, and frameworks like React <br className='hidden sm:block' /> and React Native.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="skills2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[100px] w-full">
                    <div className="skill flex flex-col justify-center items-center text-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/18552/18552820.png" alt="Web Optimization" className='h-8 sm:h-10 lg:h-[40px]' />

                        <div className="name mt-5">
                            <h2 className='text-lg sm:text-xl lg:text-[20px] font-semibold text-[rgb(38,50,56)] leading-tight lg:leading-[27.5px]'>
                                Web Optimization
                            </h2>
                        </div>
                        <div className="text mt-2">
                            <p className='text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed lg:leading-[26px] text-[#9e9e9e] text-center'>
                                Performance matters. I optimize websites and <br className='hidden sm:block' /> apps for speed, ensuring your users enjoy a <br className='hidden sm:block' /> fast and responsive experience, which in turn <br className='hidden sm:block' /> boosts user satisfaction and SEO rankings.
                            </p>
                        </div>
                    </div>
                    <div className="skill flex flex-col justify-center items-center text-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/2874/2874802.png" alt="Eye" className='h-8 sm:h-10 lg:h-[40px]' />

                        <div className="name mt-5">
                            <h2 className='text-lg sm:text-xl lg:text-[20px] font-semibold text-[rgb(38,50,56)] leading-tight lg:leading-[27.5px]'>
                                User-Centric Design
                            </h2>
                        </div>
                        <div className="text mt-2">
                            <p className='text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed lg:leading-[26px] text-[#9e9e9e] text-center'>
                                My development goes hand-in-hand with an <br className='hidden sm:block' /> eye for design. I create user interfaces that <br className='hidden sm:block' /> are not only functional but also aesthetically <br className='hidden sm:block' /> pleasing, providing a seamless and enjoyable <br className='hidden sm:block' /> user journey.
                            </p>
                        </div>
                    </div>
                    <div className="skill flex flex-col justify-center items-center text-center md:col-span-2 lg:col-span-1">
                        <img src="https://cdn-icons-png.flaticon.com/128/2991/2991109.png" alt="Form" className='h-8 sm:h-10 lg:h-[40px]' />

                        <div className="name mt-5">
                            <h2 className='text-lg sm:text-xl lg:text-[20px] font-semibold text-[rgb(38,50,56)] leading-tight lg:leading-[27.5px]'>
                                Testing and Quality Assurance
                            </h2>
                        </div>
                        <div className="text mt-2">
                            <p className='text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed lg:leading-[26px] text-[#9e9e9e] text-center'>
                                I rigorously test and debug applications to <br className='hidden sm:block' /> guarantee a bug-free and secure environment <br className='hidden sm:block' /> for users. Your peace of mind is as important <br className='hidden sm:block' /> to me as the functionality of your project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills