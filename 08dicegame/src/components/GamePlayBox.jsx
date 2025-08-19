import React, { useState } from 'react'

const GamePlayBox = () => {
    const numbers = [1, 2, 3, 4, 5, 6]
    const diceImages = []
    for (let i = 0; i < numbers.length; i++) {
        diceImages.push(`./images/dice_${numbers[i]}.png`)
    }

    const [number, setNumber] = useState(null)
    const [diceImage, setDiceImage] = useState(0)
    const [totalScore, setTotalScore] = useState(0)
    const [isRuleVisible, setIsRuleVisible] = useState(false)

    const rollDice = () => {
        const randomIndex = Math.floor(Math.random() * diceImages.length)
        setDiceImage(randomIndex)

        if (!number) {
            alert("Please Select a Number First")
            return
        }
        if (number === randomIndex + 1) {
            setTotalScore(prev => prev + (randomIndex + 1));
        } else {
            setTotalScore(prev => prev - 2);
        }
    }

    const resetScore = () => {
        setTotalScore(0)
        setNumber(null)
    }

    const rules = [
        "Select any number",
        "Click on dice image",
        "If selected number is equal to dice number → you get same point as dice",
        "If wrong guess → 2 points will be deducted"
    ]

    return (
        <div className='px-4 sm:px-8 lg:px-0'>
            {/* Score and number selection */}
            <div className='flex flex-col lg:flex-row items-center justify-between lg:px-[100px] py-6 gap-6 lg:gap-0'>
                <div className="totalScore flex flex-col justify-center items-center gap-2 order-2 lg:order-1">
                    <h2 className='text-4xl sm:text-5xl lg:text-7xl text-black font-semibold'>{totalScore}</h2>
                    <p className='text-lg sm:text-xl lg:text-2xl text-black font-normal'>Total Score</p>
                </div>
                <div className='flex flex-col items-center lg:items-end gap-3 order-1 lg:order-2'>
                    <div className='flex flex-row items-end gap-2 sm:gap-3 flex-wrap justify-center lg:justify-end'>
                        {numbers.map((num, index) => (
                            <div
                                key={index}
                                onClick={() => setNumber(num)}
                                className={`p-4 sm:p-6 lg:p-8 rounded-lg border border-black cursor-pointer text-lg sm:text-xl lg:text-2xl 
                                ${number === num ? "bg-black text-white" : "hover:bg-[#333] hover:text-white"}`}
                            >
                                {num}
                            </div>
                        ))}
                    </div>
                    <h2 className='text-xl sm:text-2xl lg:text-3xl text-black font-semibold text-center lg:text-right'>Select Number</h2>
                </div>
            </div>

            {/* Dice */}
            <div className="diceImage flex flex-col justify-center items-center gap-2 mt-[5%]">
                <img
                    src={diceImages[diceImage]}
                    alt="Not Found"
                    className='w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] cursor-pointer'
                    onClick={rollDice}
                />
                <h2 className='text-base sm:text-[18px] text-black text-center px-4'>Click The Dice to Roll</h2>

                <button
                    type="button"
                    onClick={resetScore}
                    className='px-6 sm:px-8 lg:px-10 py-2 bg-black text-white border border-transparent 
                               active:bg-white active:text-black active:border active:border-black cursor-pointer text-sm sm:text-base'>
                    Reset Score
                </button>

                <button
                    type="button"
                    onClick={() => setIsRuleVisible(prev => !prev)}
                    className='px-6 sm:px-8 lg:px-10 py-2 bg-white text-black border border-black 
                               active:bg-black active:text-white active:border active:border-transparent cursor-pointer text-sm sm:text-base'>
                    {isRuleVisible ? "Hide Rules" : "Show Rules"}
                </button>
            </div>

            {/* Rules Section */}
            {isRuleVisible && (
                <div className="flex flex-col justify-center items-center mt-6 text-base sm:text-lg text-black px-4">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">📜 Game Rules</h2>
                    <ul className="list-disc text-left max-w-md">
                        {rules.map((rule, i) => (
                            <li key={i} className="mb-1">{rule}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default GamePlayBox
