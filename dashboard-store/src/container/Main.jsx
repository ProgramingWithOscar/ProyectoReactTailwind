import React from 'react';
import { RiArrowDownSLine, RiSearch2Line } from 'react-icons/ri';

const Main = () => {
    return (
        <div className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-4'>
            <div className=' text-yellow-200 col-span-1 lg:col-span-6'>
            {/* Header */}
                <header >
                {/* Title and search */}
                    <div className='flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center'>
                    <div>
                        <h1 className='text-2xl text-gray-500'>Jeager Resto</h1>
                        <p className='text-gray-300'>10 de Mayo de 2023</p>
                    </div>
                    <form>
                     <div className='w-full relative'>
                     <RiSearch2Line className='absolute left-2 top-1/2 -translate-y-1/2 text-white'/>
                     <input type="text" className=' bg-[#1F1D2B] w-full py-2 pl-8 pr-4 rounded-lg text-gray-300 outline-none' placeholder='Search'></input>

                     </div>
                    </form>
                    </div>
                    {/* Tabs */}
                    <nav className='flex items-center justify-between border-b text-gray-300 mb-6 md:justify-start md:gap-5'>
                        <a href='' className=' relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[2px] text-[#ec7c6a]'>
                            Hot Dishes
                        </a>
                        <a href='' className=' pr-8'>
                            Cold Dishes
                        </a>
                        <a href='' className=' pr-8'>
                            Soup
                        </a>
                        <a href='' className=' pr-8'>
                            Grill
                        </a>
                      
                    </nav>
                   
                </header>
                 {/* Title content */}
                 <div className='flex items-center justify-between mb-16 '>
                        <h2 className='text-lx text-gray-300'>Choose Dishes</h2>
                        <button className='flex py-2 px-4 rounded-lg items-center gap-4 text-gray-300 bg-[#1F1D2B] '><RiArrowDownSLine/>Dine in</button>
                    </div>
                {/* Content */}
                <div className='p-8'>
                   {/* Card */}
                    <div className='bg-[#1F1D2B] p-8 rounded-lg flex gap-2 flex-col items-center  text-gray-300 text-center'>
                        <img src='../../public/guisantes-pollo.png' className='w-40 h-40 object-cover -mt-24 shadow-2xl rounded-full flex '></img>

                        <p className='text-xl'>Speacy seasoned seafood nodles</p>
                        <span className='text-gray-400'>$2.29</span>
                        <p className='text-gray-500'>20 Bowls available</p>
                    </div>
                </div>
            </div>
            <div className=' text-yellow-200 col-sapn-1 lg:col-span-2 bg-red-700 fixed lg:static right-0'>
                Carrito
            </div>
           
        </div>
    );
}

export default Main;
