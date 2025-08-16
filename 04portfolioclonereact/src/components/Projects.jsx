import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const projects = [
        {
            img: "https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog-1.svg",
            title: "Mobile App Development",
            description: "Mobile app designed to help users <br /> discover and explore local restaurants <br /> and cuisines.",
            extraClass: ""
        },
        {
            img: "https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog2.svg",
            title: "Landing Page Development",
            description: "Promotional landing page for a fitness <br /> website Summer Campaign. Form <br /> development included. ",
            extraClass: ""
        },
        {
            img: "https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog3.svg",
            title: "Mobile App Development",
            description: "Mobile app designed to help users <br /> discover and explore local restaurants <br /> and cuisines.",
            extraClass: ""
        },
        {
            img: "https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog4.svg",
            title: "E-commerce Development",
            description: "Ecommerce website offering access to <br /> the latest and greatest gadgets and <br /> accessories.",
            extraClass: ""
        },
    ]

    return (
        <div className='max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8'>
            <div className="projectHeading flex flex-col justify-center items-center gap-4 leading-tight lg:leading-[46.8px]">
                <div>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[36px] text-center font-semibold text-[rgb(38,50,56)]'>
                        My Projects
                    </h2>
                    <p className='text-center text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed lg:leading-[32.5px] font-normal text-[#9e9e9e] mt-7 max-w-4xl mx-auto'>
                        Whether you have a mobile app idea that needs to come to life or a <br className='hidden md:block' /> website that requires a facelift, I'm here to turn your digital dreams into <br className='hidden md:block' /> reality.
                    </p>
                </div>
            </div>

            <div className='mt-12 lg:mt-[100px] flex flex-col justify-center items-center gap-12 lg:gap-[100px]'>
                {/* First Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 w-full">
                    {projects.map((proj, index) => (
                        <ProjectCard
                            key={`row1-${index}`}
                            img={proj.img}
                            title={proj.title}
                            description={proj.description}
                            extraClass={proj.extraClass}
                        />
                    ))}
                </div>

                {/* Second Row - Reversed order for larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 w-full lg:flex lg:flex-row-reverse">
                    {projects.map((proj, index) => (
                        <ProjectCard
                            key={`row2-${index}`}
                            img={proj.img}
                            title={proj.title}
                            description={proj.description}
                            extraClass={proj.extraClass}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects