import React from 'react'
import image from '/public/image.png'
import {Link, NavLink} from "react-router-dom"

function Home() {
    return (
        <div className="flex flex-row max-md:flex-col w-[100dvw] h-[100dvh] mx-auto p-8 justify-center items-center gap-[10dvh]">
            <div className='w-[90dvw] md:w-[40dvw]'>
                <img src={image} alt="dice-image"
                    className="aspect-3/2 object-cover rounded-xl" />
            </div>
            <div className='w-[90dvw] md:w-[40dvw] flex flex-col justify-center items-center'>
                <div>
                    <h1 className='p-8 text-center text-3xl sm:text-[56px] font-extrabold'>DICE GAME</h1>
                </div>
                <div>
                    <Link to="/play">
                    <button className='cursor-pointer py-2 px-8 text-center  hover:opacity-95 text-4xl text-white font-bold bg-black rounded-md'>Play Game</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
