import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white px-6 md:px-0'>
            <p className='text-5xl font-semibold md:pl-24 pt-24 pb-10 md:pb-14'>tickete</p>
            <div className='py-8 md:pl-24 border-t text-sm text-gray-500 border-gray-500 md:flex gap-6'>
                <p className='hidden md:inline-block'>Made with ❤</p>
                <div className='text-gray-400 flex flex-wrap gap-4 font-semibold'>
                    <div className='cursor-pointer'><span className='hidden md:inline pr-2 md:pr-4 text-gray-400'>•</span>Privacy policy</div>
                    <div className='cursor-pointer'><span className='pr-2 md:pr-4 text-gray-400'>•</span>Terms of usuage</div>
                    <div className='cursor-pointer'><span className='pr-2 md:pr-4 text-gray-400'>•</span>cancellation policy</div>
                    <div className='cursor-pointer'><span className='pr-2 md:pr-4 text-gray-400'>•</span>Sitemap</div>
                </div>
                <p className='md:hidden py-6'>Made with ❤</p>
            </div>
        </div>
    )
}

export default Footer