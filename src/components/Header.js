import React from 'react'

const Header = () => {
    return (
        <div className='h-screen' style={{backgroundImage: `url('https://i.pinimg.com/originals/b1/1f/e2/b11fe22c47c52875647cd40c465236b2.jpg')`}}>
            <h1 className='text-black text-3xl text-center py-10 px-4 font-bold'>Joyeaux anniversaire, ma belle princesse🎂🤍</h1>
            <div
                className="block lg:hidden rounded-full shadow-xl mx-auto h-72 w-72 my-16 bg-cover bg-center heartbeat"
                style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/photoswithandre.appspot.com/o/Imagen%20de%20WhatsApp%202023-07-08%20a%20las%2015.21.46.jpg?alt=media&token=b56747f8-a560-420c-8786-2aacbd10841c')` }}></div>
            <h1 className='text-black text-2xl text-center px-2 py-10 font-bold'>Te desea el Dientesitos 🤍</h1>

        </div>
    )
}

export default Header