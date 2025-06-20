import React, { useState } from 'react'

function Play() {
    const [score, setScore] = useState(0)
    const [selection, setSelection] = useState(null);
    const [dice, setDice] = useState(null);
    const [won, setWon] = useState(null)
    const [showRule, setShowRule] = useState(false);

    const rollDice = () => {
        if (!selection) {
            alert("You have not selected any number, you can't roll the dice...");
            return;
        }

        const rolled = Math.floor(Math.random() * 6) + 1;
        console.log("Dice Rolled:", rolled);

        setDice(rolled);

        if (rolled === parseInt(selection)) {
            setScore(prev => prev + 4);
            setWon(true);
        } else {
            setScore(prev => prev - 1)
            setWon(false);
        }
    };

    return (
        <>
            <div className='p-8 flex w-[100dvw] justify-between '>
                <div className='flex flex-col items-center'>
                    <div className='text-[60px]'>{score}</div>
                    <div className='font-bold'>Total Score</div>
                </div >
                <div className='flex flex-col justify-between'>
                    <div>
                        {selection ? <p className='font-bold text-green-500'>You selected : {selection}</p> : <p className='font-bold text-red-600'>You have not selected any number yet...</p>}
                    </div>
                    <div className='flex gap-[16px]'>
                        {["1", "2", "3", "4", "5", "6"].map((num) => (
                            <div
                                key={num}
                                tabIndex="0"
                                onClick={() => setSelection(num)}
                                className='cursor-pointer px-4 py-2 font-bold bg-gray-200 text-black focus:bg-gray-900 focus:text-amber-200 rounded-xl aspect-square flex items-center justify-center'
                            >
                                {num}
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className='font-bold'>Select Number...</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-[25px]'>
                <div></div>
                <div className="flex flex-col items-center gap-4 mt-6">
                    <button className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-200" onClick={rollDice}>
                        🎲 Click to roll the dice
                    </button>

                    <button className="cursor-pointer px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-md transition duration-200" onClick={() => setScore(0)}>
                        🔁 Reset Score
                    </button>

                    <button className="cursor-pointer px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-xl shadow-md transition duration-200" onClick={() => { setShowRule(!showRule) }}>
                        📜 Show Rules
                    </button>
                </div>
                {showRule ? (
                    <div className="flex flex-col items-center text-wrap px-6 py-2 bg-gray-300 rounded-md">
                        {/* Content shown only if someVariable is truthy */}
                        <p className='font-semibold'>How to play the game</p>
                        <div>
                        <p>1: Select any number</p>
                        <p>2: Click on roll the dice button</p>
                        <p>3: You get 4 points, if number selected by you and system comes out to be same</p>
                        <p>4: And 1 point is deducted, if the selection doesn't match</p>
                        </div>
                    </div>
                ) : null}

                <div className=" text-center text-lg font-semibold">
                    {dice ? (
                        won ? (
                            <p className="text-green-600">
                                🎉 You won! The computer also selected <span className="font-bold">{dice}</span>
                            </p>
                        ) : (
                            <p className="text-red-600">
                                ❌ You lost this round. Computer selected: <span className="font-bold">{dice}</span>
                            </p>
                        )
                    ) : (
                        <p className="text-gray-500">Roll the dice to play.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Play
