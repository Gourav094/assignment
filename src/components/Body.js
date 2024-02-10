import React from 'react'
import BookingDetail from '../BookingDetail'
import Summary from "./Summary"
import Footer from './Footer'
import Faq from './Faq'

const Body = () => {
    return (
        <div>
            <div className='flex ml-[12%] mt-14 gap-6 border-b'>
                <BookingDetail />
                <Summary />
            </div>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Body

// 