import React, { useState } from 'react'

function Play() {
    const [score, setScore] = useState(0)
    const [selection, setSelection] = useState(null);
    const [dice, setDice] = useState(null);
    const [won, setWon] = useState(null)
    const [showRule, setShowRule] = useState(false);

    const links = [
        "https://i.pinimg.com/736x/be/9c/7f/be9c7f30a5b4070658f62fefe26519c0.jpg",
        "https://i.pinimg.com/736x/d2/63/9c/d2639c3588b17ccc47ecd421330bea33.jpg",
        "https://i.pinimg.com/736x/db/c6/86/dbc686d23e2e9ccbaccd87ba307700d9.jpg",
        "https://i.pinimg.com/736x/87/fc/dd/87fcddae07b1ee254f0061a4a9d31892.jpg",
        "https://i.pinimg.com/736x/3e/c5/c6/3ec5c6a646873e29670f1f433d4a99bf.jpg",
        "https://i.pinimg.com/736x/2b/2c/5c/2b2c5cd1cb2b6b9c8ab00988e1ecdb62.jpg"
    ]
    const [link, setLink] = useState(links[5])
    const rollDice = () => {
        if (!selection) {
            alert("You have not selected any number, you can't roll the dice...");
            return;
        }

        const rolled = Math.floor(Math.random() * 6) + 1;
        console.log("Dice Rolled:", rolled);

        setDice(rolled);
        setLink(links[rolled-1]);

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
            <div className='p-8 sm:flex w-[100dvw] justify-between max-sm:items-center '>
                <div className='flex flex-col items-center'>
                    <div className='text-[60px]'>{score}</div>
                    <div className='font-bold'>Total Score</div>
                </div >
                <div className='flex flex-col justify-between max-sm:items-center max-sm:gap-2'>
                    <div>
                        {selection ? <p className='font-bold text-green-500'>You selected : {selection}</p> : <p className='font-bold text-red-600'>You have not selected any number yet...</p>}
                    </div>
                    <div className='flex gap-[16px] max-xs:gap-[8px]'>
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
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]">
                    <img
                        src={link}
                        alt="Dice"
                        className="w-full h-full object-contain"
                    />
                </div>

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
                            <p className="text-green-600 text-wrap text-center">
                                🎉 You won! The computer also selected <span className="font-bold">{dice}</span>
                            </p>
                        ) : (
                            <p className="text-red-600 text-wrap text-center ">
                                ❌ You lost this round. Computer selected: <span className="font-bold">{dice}</span>
                            </p>
                        )
                    ) : (
                        <p className="text-gray-500 text-wrap text-center ">Roll the dice to play.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Play
