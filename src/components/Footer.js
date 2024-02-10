import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <p className='text-5xl font-semibold pl-24 pt-24 pb-14'>tickete</p>
            <div className='py-8 pl-24 border-t text-sm text-gray-500 border-gray-500 flex gap-6'>
                <p>Made with ❤</p>
                <ul className='text-gray-300 flex gap-4'>
                    <li className='cursor-pointer'><span className='pr-4 text-gray-400'>•</span>Privacy policy</li>
                    <li className='cursor-pointer'><span className='pr-4 text-gray-400'>•</span>Terms of usuage</li>
                    <li className='cursor-pointer'><span className='pr-4 text-gray-400'>•</span>cancellation policy</li>
                    <li className='cursor-pointer'><span className='pr-4 text-gray-400'>•</span>Sitemap</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer