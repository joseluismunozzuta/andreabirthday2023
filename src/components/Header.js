import React from 'react';
import { Link } from 'react-scroll';
import { IconButton } from "@material-tailwind/react";

const Header = () => {
    return (
        <div className='h-screen relative' style={{ backgroundImage: `url('https://i.pinimg.com/originals/b1/1f/e2/b11fe22c47c52875647cd40c465236b2.jpg')` }}>
            <h1 className='text-black text-3xl text-center py-10 px-4 font-bold'>Joyeaux anniversaire, ma belle princesse🎂🤍</h1>
            <div
                className="block lg:hidden rounded-full shadow-xl mx-auto h-72 w-72 my-16 bg-cover bg-center heartbeat"
                style={{ backgroundImage: `url('/authorPhoto.jpg')` }}></div>
            <h1 className='text-black text-2xl text-center px-2 py-10 font-bold'>Te desea el Dientesitos 🤍</h1>

            <Link to="component2" smooth={true} duration={500} className='absolute bottom-0 left-0 p-4'>
                <IconButton color="white" className="rounded-full border-2 border-black">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header