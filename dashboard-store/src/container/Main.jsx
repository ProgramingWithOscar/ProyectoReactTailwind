import React from 'react';

const Main = () => {
    return (
        <div className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8'>
            <div className=' text-yellow-200 col-span-1 lg:col-span-6 bg-red-400'>
                Hola
            </div>
            <div className=' text-yellow-200 col-sapn-1 lg:col-span-2 bg-red-700 fixed lg:static right-0'>
                Carrito
            </div>
           
        </div>
    );
}

export default Main;
