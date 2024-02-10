import React from 'react'
import CHAT_IMG from '../assets/chat-with-us.png'
const Faq = () => {
    return (
        <div className='py-14 px-[12%] text-gray-900'>
            <div className='flex gap-20'>
                <div className='w-2/5'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Frequently asked questions</h1>
                        <p className='text-gray-500 py-4'>Here are some of our most asked questions. </p>
                    </div>
                    <div className='my-8 px-4 rounded-lg bg-gray-50 flex justify-between items-center'>
                        <div className=' py-4 font-semibold'>
                            <p className=' pb-4 text-lg'>Still need help?<br /> We’re here for you.</p>
                            <button className='bg-black text-white rounded-lg py-3 px-4'>Chat with us</button>
                        </div>
                        <img className='w-36 h-24' src={CHAT_IMG} alt='Chat with us' />
                    </div>
                </div>
                <div className='w-3/5'>
                    <div className='text-gray-900 font-semibold flex gap-6 items-center border rounded-xl py-4 px-8'>
                        <i className="fa-solid fa-plus text-gray-500"></i>
                        <p>What should I do on my first trip to Rome?</p>
                    </div>
                    <div className='my-6 text-gray-900 font-semibold flex gap-6 border rounded-xl py-4 px-8'>
                        <i className="fa-solid fa-xmark text-gray-500 pt-2"></i>
                        <div>
                            <p>What are some hidden gems to see in Rome?</p>
                            <p className='text-gray-400 text-sm py-3 px-1 '>Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.</p>
                        </div>
                    </div>
                    <div className='my-6 text-gray-900 font-semibold flex gap-6 items-center border rounded-xl py-4 px-8'>
                        <i className="fa-solid fa-plus text-gray-500"></i>
                        <p>How much time should I spend in Rome?</p>
                    </div>
                    <div className='my-6 text-gray-900 font-semibold flex gap-6 items-center border rounded-xl py-4 px-8'>
                        <i className="fa-solid fa-plus text-gray-500"></i>
                        <p>What food is Rome known for?</p>
                    </div>
                    <div className='my-6 text-gray-900 font-semibold flex gap-6 items-center border rounded-xl py-4 px-8'>
                        <i className="fa-solid fa-plus text-gray-500"></i>
                        <p>What is the best way to get around Rome?</p>
                    </div>
                </div>
            </div>
            <div className='border mt-4'></div>
            
        </div>
    )
}

export default Faq