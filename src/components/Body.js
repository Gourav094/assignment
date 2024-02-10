import React from 'react'
import BookingDetail from '../BookingDetail'
import Summary from "./Summary"
import Footer from './Footer'
import Faq from './Faq'

const Body = () => {
    return (
        <div>
            <div className='md:flex mx-3 max-w-screen md:ml-[12%] mt-14 gap-6 border-b'>
                <BookingDetail />
                <div className='hidden md:inline-block'><Summary /></div>
            </div>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Body

// 