import React, { useCallback, useEffect, useState } from 'react'

const ContactUsCard = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [interests, setInterests] = useState("")
    const [message, setMessage] = useState("")

    const [allUserContactForms, setAllUserContactForms] = useState(() => {
        return JSON.parse(localStorage.getItem("allUserContactForms")) || []
    })

    useEffect(() => {
        localStorage.setItem("allUserContactForms", JSON.stringify(allUserContactForms))
    }, [allUserContactForms])

    const sendMessage = () => {
        if (!firstName || !lastName || !email || !interests || !message) {
            alert("Please Fill The Fields First")
            return
        }
        const allUserContactFormDetails = {
            FirstName: firstName,
            lastName: lastName,
            Email: email,
            Interests: interests,
            Message: message
        }
        setFirstName("")
        setLastName("")
        setEmail("")
        setInterests("")
        setMessage("")

        setAllUserContactForms([...allUserContactForms, allUserContactFormDetails])
        alert(`Message sent by ${firstName} ${lastName} ✅`)
    }

    return (
        <div className='px-4 sm:px-6 lg:px-[90px] rounded-lg'>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 px-4 sm:px-6 lg:px-[20px] border border-[#dedddd] rounded-lg items-center p-6 lg:p-8">

                {/* LEFT SIDE - Contact Info */}
                <div className="flex flex-col items-start p-6 lg:p-10 rounded-lg bg-[#212121] w-full lg:w-[532.422px] lg:h-[506.5px]">
                    <div className="text-xl sm:text-2xl lg:text-[24px] text-white font-semibold leading-tight lg:leading-[33px]">
                        Contact Information
                    </div>

                    <div className="mt-4">
                        <p className="text-[#979797] text-sm sm:text-base lg:text-[16px] leading-6 font-normal">
                            Fill up the form and our Team will get back to you within <br className='hidden sm:block' /> 24 hours.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 mt-10 w-full">
                        <div className="flex flex-row items-center gap-4">
                            <img src="https://cdn-icons-png.flaticon.com/128/1/1257.png" alt="Call" className="h-5 lg:h-6 filter invert flex-shrink-0" />
                            <p className="text-sm sm:text-base lg:text-[16px] text-white font-semibold leading-[26px]">
                                +1(424) 535 3523
                            </p>
                        </div>

                        <div className="flex flex-row items-center gap-4">
                            <img src="https://cdn-icons-png.flaticon.com/128/542/542689.png" alt="Email" className="h-5 lg:h-6 filter invert flex-shrink-0" />
                            <p className="text-sm sm:text-base lg:text-[16px] text-white font-semibold leading-[26px]">
                                hello@mail.com
                            </p>
                        </div>

                        <div className="flex flex-row items-center gap-4">
                            <img src="https://cdn-icons-png.flaticon.com/128/16739/16739517.png" alt="Ticket" className="h-5 lg:h-6 filter invert flex-shrink-0" />
                            <p className="text-sm sm:text-base lg:text-[16px] text-white font-semibold leading-[26px]">
                                Open Support Ticket
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - Form */}
                <form className="flex flex-col gap-6 w-full" onSubmit={(e) => { e.preventDefault(); sendMessage() }}>
                    {/* Name Inputs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* First Name */}
                        <div className="flex flex-col w-full">
                            <label htmlFor='yourFirstName' className="text-[rgb(69,90,100)] text-sm mb-1 cursor-pointer">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="eg. Lucas"
                                value={firstName}
                                id='yourFirstName'
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full border-b border-gray-300 p-2 outline-none"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col w-full">
                            <label htmlFor='yourLastName' className="text-[rgb(69,90,100)] text-sm mb-1 cursor-pointer">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="eg. Jones"
                                value={lastName}
                                id='yourLastName'
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full border-b border-gray-300 p-2 outline-none"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor='yourEmail' className="text-[rgb(69,90,100)] text-sm mb-1 cursor-pointer">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="eg. lucas@mail.com"
                            value={email}
                            id='yourEmail'
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-b border-gray-300 p-2 outline-none"
                        />
                    </div>

                    {/* Interest */}
                    <div>
                        <p className="text-[rgb(69,90,100)] mb-2">What are you interested on?</p>
                        <div className="grid grid-cols-2 sm:flex gap-4">
                            {["Design", "Development", "Support", "Other"].map((option) => (
                                <label key={option} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="interest"
                                        value={option}
                                        checked={interests === option}
                                        onChange={(e) => setInterests(e.target.value)}
                                    />
                                    <span className="text-sm">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                        <label htmlFor='yourMessage' className="text-[rgb(69,90,100)] text-sm mb-1 cursor-pointer">Your Message</label>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            id='yourMessage'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="border-b border-gray-300 p-2 outline-none resize-none h-24"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className='flex flex-row justify-end'>
                        <button
                            type="submit"
                            className="bg-black text-white py-3 rounded-lg shadow-lg active:bg-[#333] duration-300 w-full sm:w-[154.688px] text-xs sm:text-[16px] font-bold leading-4"
                        >
                            SEND MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUsCard