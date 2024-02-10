import React from 'react'
import Carousel from './Carousel'

const Summary = () => {
    return (
        <div className='w-96 border-2 rounded-3xl h-fit overflow-hidden pb-6'>
            <div>
                <div className=' py-4'>
                    <Carousel/>
                </div>
                <div className='px-4'>
                    <div>
                        <div className='text-sm flex items-center gap-2 text-gray-500'>
                            <i className="fa-regular fa-star-half-stroke -rotate-[72deg] text-red-400"></i>
                            <p className='text-gray-900'>4.9</p>
                            <p>(4.5k)</p>
                            <p>•</p>
                            <p>{'<category>'}</p>
                        </div>
                        <p className='font-semibold pr-12'>Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</p>
                    </div>
                    <div className='py-4 font-semibold text-gray-900 border-b border-dashed'>
                        <div className='flex gap-4  items-center py-2'>
                            <i className="fa-solid fa-ticket"></i>
                            <p>{'<ticket type - variant>'}</p>
                        </div>
                        <div className='flex gap-4 py-2'>
                            <i className="fa-solid fa-calendar pt-2"></i>
                            <div>
                                <p>{'<day>, <month> <date>'}</p>
                                <p className='text-xs text-gray-500 py-1 font-normal'>{'Duration: <duration>'}</p>
                            </div>
                        </div>
                        <div className='flex gap-4 py-2'>
                            <i className="fa-solid fa-clock pt-2"></i>
                            <div>
                                <p>{'<time>'}</p>
                                <p className='text-gray-500 text-xs py-1 font-normal'>{'Operating hours: <time> to <time>'}</p>
                            </div>
                        </div>
                        <div className='flex gap-4  items-center py-2'>
                            <i className="fa-solid fa-user-group"></i>
                            <p>5 guests</p>
                        </div>
                    </div>
                    <div className='py-6 text-gray-500 font-semibold flex items-center justify-between'>
                        <p className='underline'>View payment summary</p>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className='border mb-4'></div>
            <div className='px-4 pb-1'>
                <div className=''>
                    <div className='font-semibold text-lg flex items-center justify-between'>
                        <p>Total Payable</p>
                        <p>$XXX</p>
                    </div>
                    <button className='px-2 my-2 rounded-full text-sm bg-green-100 text-green-500 font-semibold'>
                                        <i className="fa-solid fa-piggy-bank pr-1 text-xs"></i>
                                        {'You save <price>'}</button>
                    <div className='py-4 text-gray-500 flex gap-4'>
                        <p className='underline font-semibold'>You will be charged in AED</p>
                        <i className="fa-solid fa-circle-info"></i>
                    </div>
                </div>
                <div className='pt-6 hidden md:inline-block'>
                    <div className='pb-4 text-sm text-gray-500'>
                        <span>By clicking “confirm & pay”, you agree to <span className='text-blue-700 underline'>Tickete’s general terms  and conditions</span> and <span className='text-blue-700 underline'>cancellation policy </span>.</span>
                    </div>
                    <button className='w-full text-center py-4 text-white text-lg font-semibold rounded-2xl bg-black'>
                        <i className="fa-solid fa-lock pr-3"></i>
                        Confirm & pay</button>
                </div>
            </div>
        </div>
    )
}

export default Summary