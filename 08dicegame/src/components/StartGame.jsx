import React, { useState } from 'react'

const StartGame = ({ toggle }) => {

    return (
        <div className='flex flex-col lg:flex-row items-center justify-center mt-[5%] px-4 lg:px-0'>
            <div className='w-full max-w-[649px] lg:w-[649px] h-auto lg:h-[522px] my-auto mb-8 lg:mb-0'>
                <img src="./images/dices.png" alt="Dice" className='w-full h-auto' />
            </div>
            <div className='flex flex-col justify-center items-center lg:items-end w-full max-w-[528px] lg:w-[528px] gap-2 text-center lg:text-right'>
                <h2 className='text-4xl sm:text-5xl lg:text-7xl font-bold'>
                    DICE GAME
                </h2>
                <button
                    onClick={toggle}
                    type="button"
                    className='px-6 sm:px-8 lg:px-10 py-2 cursor-pointer bg-black border border-transparent text-white active:bg-white active:text-black active:border active:border-black duration-300 text-sm sm:text-base'>Play Now</button>
            </div>
        </div>
    )
}

export default StartGame
