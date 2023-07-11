import React from 'react';
import { Link } from 'react-scroll';
import { IconButton } from "@material-tailwind/react";
import { useAppContext } from '../context/AppContext';

const Generator = () => {

    const {randAll} = useAppContext();

    const generateTarjeta = () => {
        randAll();
    }

    return (
        <div className="genbg hero h-screen relative">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Existen tantas...</h1>
                    <p className="mb-5">maneras de desearte un feliz cum, así que creé la forma de hacer 193 636 396 800 (193 mil 636 millones 396 mil 800) distintos mensajes para tú🤓</p>
                    <Link to="component4" smooth={true} duration={500} className="btn btn-primary" onClick={() => generateTarjeta()}>Genera mi tarjetita</Link>
                </div>
            </div>

            <Link to="component2" smooth={true} duration={500} className='absolute top-0 right-0 p-4'>
                <IconButton color="white" className="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg>
                </IconButton>
            </Link>

        </div>
    )
}

export default Generator