import React from 'react'
import { useAppContext } from '../context/AppContext'
import { Link } from 'react-scroll';
import { IconButton } from "@material-tailwind/react";

const Tarjeta = () => {

    const { feliz } = useAppContext();
    const { reasons } = useAppContext();
    const { reasons2 } = useAppContext();
    const { names } = useAppContext();
    const { names2 } = useAppContext();
    const { names3 } = useAppContext();
    const { img1 } = useAppContext();
    const { img2 } = useAppContext();
    const { randAll } = useAppContext();

    const generateTarjeta = () => {
        randAll();
    }

    return (
        <div className='h-screen wallpaper cookie text-center py-4 text-gray-700 relative'>

            <img className="mask mask-squircle w-2/5 h-48 mx-1 float-left" src={img1} alt='' />
            <h1 className='text-3xl px-2'>{feliz}, {names}!</h1>
            <h1 className='text-2xl text-light-blue-900 pt-6 px-2'>Te mereces lo mejor del mundo hoy y siempre por {reasons}!</h1>
            <img className="mask mask-squircle w-2/5 h-48 mx-1 float-right" src={img2} alt='' />
            <h1 className='text-2xl text-indigo-900 pt-10 ml-10 text-left px-2'>Dios te cuide siempre, {names2}, gracias por {reasons2}!</h1>
            <h1 className='text-3xl pt-6 text-center px-2 text-black'>Te amo con mi vida, {names3} ❤️!</h1>

            <Link className='absolute bottom-0 right-0 p-4'>
                <IconButton color="white" className="rounded-full absolute bottom-0 right-0 p-2" onClick={() => generateTarjeta()}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" /></svg>
                </IconButton>
            </Link>


        </div>
    )
}

export default Tarjeta;