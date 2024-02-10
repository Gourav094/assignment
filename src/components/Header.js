import React from 'react'

const Header = () => {
    return (
        <div>
            <div className='py-4 mx-8 md:mx-52 flex items-center justify-between text-gray-500 font-semibold'>
                <div>
                <h1 className='text-4xl font-bold text-black hidden md:inline-block'>tickete</h1>
                <span className='md:hidden inline-block'><i className='fa-solid fa-arrow-left text-gray-900'></i></span>
                </div>
                <div className='flex gap-2 items-center'>
                    <i className="fa-solid fa-lock"></i>
                    <h1>Checkout</h1>
                </div>
                <div className='flex gap-2 items-center text-gray-900'>
                    <i className="fa-regular fa-circle-question"></i>
                    <h1 className='hidden md:inline-block'>Help</h1>
                </div>
            </div>
            <div className='bg-black text-center items-center font-semibold'>
                <h1 className='text-gray-50 text-sm py-2'>Holding your tickets for 30.00</h1>
            </div>
        </div>
    )
}

export default Header