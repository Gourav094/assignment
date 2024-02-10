import React from 'react'
import IMG_carousel from '../assets/img1.png'
const Carousel = () => {
    return (
        <div className='relative w-[350px] mx-4 overflow-hidden rounded-2xl shadow-lg bg-gray-100'>
            <img className='rounded-2xl ' src={IMG_carousel} alt='loading..' />
            <div className='absolute top-4 left-4'>
                <button className='text-gray-900 bg-white px-2 py-1 rounded-lg'>
                    <i className='fa-solid fa-trophy pr-2'></i>
                    Bestseller
                </button>
            </div>
            <div className='top-[45%] inset-x-0 absolute'>
                <div className='left-6 absolute inline-flex items-center justify-center rounded-full h-8 w-8 bg-gray-200 '><i className='fa-solid fa-chevron-left text-gray-700'></i></div>
                <div className='right-6 absolute inline-flex items-center justify-center rounded-full h-8 w-8 bg-gray-200 '><i className='fa-solid fa-chevron-right text-gray-700'></i></div>
            </div>
            <div className='absolute left-[40%] bottom-4 text-center'>
                <div className='flex gap-1 items-center'>
                    <div className='w-[6px] h-[6px] rounded-full bg-gray-200'></div>
                    <div className='w-2 h-2 rounded-full bg-gray-200'></div>
                    <div className='w-2 h-2 rounded-full bg-gray-200'></div>
                    <div className='w-6 h-2 rounded-full bg-gray-100'></div>
                    <div className='w-2 h-2 rounded-full bg-gray-200'></div>
                    <div className='w-2 h-2 rounded-full bg-gray-200'></div>
                    <div className='w-[6px] h-[6px] rounded-full bg-gray-200'></div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
