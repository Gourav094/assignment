import React from 'react'

const BookingDetail = () => {
    return (
        <div className='w-3/5 text-gray-500'>
            <h1 className='text-6xl font-medium pb-6 text-gray-900'>Confirm & pay</h1>
            <div className='text-sm flex justify-between px-6 border rounded-xl py-4 bg-gray-50 my-10'>
                <div>
                    <h1 className='font-semibold text-gray-900 '>Free cancellation</h1>
                    <p>Tickets can be cancelled by 13th December, 2022.</p>
                </div>
                <i className="fa-solid fa-circle-info text-xs"></i>
            </div>
            <div className='py-6'>
                <h1 className='font-semibold pb-4 text-2xl text-gray-900'>Enter your details</h1>
                <p className='pb-12'>We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
                <div className=''>
                    <input className='w-full border outline-none rounded-2xl p-4' type='text' placeholder='Full name' />
                    <div className='py-8 flex gap-6'>
                        <input className='border outline-none rounded-2xl p-4 w-1/2' type='text' placeholder='Country code' />
                        <input className='border outline-none rounded-2xl p-4 w-1/2' type='text' placeholder='Phone number' />
                    </div>
                    <div className='pb-8 border-b flex gap-6'>
                        <input className='border outline-none rounded-2xl p-4 w-1/2' type='text' placeholder='Email' />
                        <input className='border outline-none rounded-2xl p-4 w-1/2' type='text' placeholder='Confirm Email' />
                    </div>
                </div>
            </div>
            <div className='pt-8 py-4 border-b'>
                <h1 className='pb-2 font-semibold text-gray-900 text-2xl'>Additional information</h1>
                <p className='py-2'>We need a few more details to complete your reservation.</p>
                <div className='py-1'>
                    <div className='py-6 flex gap-4'>
                        <input className='outline-none p-4 w-1/2 border rounded-lg' placeholder='Input label' type='text' />
                        <input className='outline-none p-4 w-1/2 border rounded-lg' placeholder='Select' type='text' />
                    </div>
                    <input className='outline-none mb-2 p-4 rounded-lg border w-full' placeholder='Multiselect' type='text' />
                </div>
            </div>
            <div className='py-8'>
                <h1 className='py-2 font-semibold text-gray-900 text-2xl'>Select your mode of payment</h1>
                <p className='py-2'>Payments with Tickete are secure and encrypted.</p>
                <div className='pt-6'>
                    <div className='border rounded-2xl border-gray-900 p-6'>
                        <div className='flex justify-between pb-3'>
                            <div className='flex gap-2'>
                                <i className="fa-regular fa-credit-card p-1 border rounded"></i>
                                <h1 className='text-gray-900 font-semibold'>Credit & debit card</h1>
                            </div>
                            <i className="fa-solid fa-circle-dot text-xl text-gray-900"></i>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <div className='border rounded pt-1 px-2'>
                                <svg width="27" height="10" viewBox="0 0 27 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5513 0.625244C18.3739 0.625244 19.0391 0.814472 19.4585 0.985855L19.1693 2.8149L18.977 2.72496C18.5922 2.55369 18.0843 2.38255 17.393 2.40063C16.5535 2.40063 16.1769 2.76987 16.1682 3.13036C16.1682 3.5269 16.6237 3.78823 17.3674 4.17578C18.5926 4.77952 19.1608 5.51835 19.1524 6.48257C19.1351 8.23976 17.6826 9.37524 15.4513 9.37524C14.4974 9.36614 13.5785 9.15847 13.0798 8.92445L13.3774 7.02307L13.6574 7.1584C14.3487 7.4741 14.8035 7.60896 15.6525 7.60896C16.2647 7.60896 16.9211 7.34739 16.9295 6.77995C16.9295 6.41047 16.6499 6.13992 15.8272 5.72542C15.0223 5.31978 13.9461 4.64406 13.9635 3.4275C13.9726 1.77858 15.4514 0.625244 17.5513 0.625244Z" fill="#00579F" />
                                    <path d="M9.62357 9.24901H11.75L13.0799 0.778786H10.9536L9.62357 9.24901Z" fill="#00579F" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9095 0.778786H23.2647C22.7575 0.778786 22.3722 0.931845 22.1533 1.48156L18.9948 9.24889H21.226C21.226 9.24889 21.5933 8.20347 21.6723 7.97831H24.4024C24.4635 8.27568 24.6561 9.24889 24.6561 9.24889H26.625L24.9095 0.778786ZM22.2847 6.24831C22.4598 5.76171 23.1337 3.87841 23.1337 3.87841C23.1301 3.88571 23.1579 3.80627 23.1993 3.68819C23.2603 3.51392 23.3509 3.25544 23.4134 3.06748L23.5621 3.79733C23.5621 3.79733 23.9647 5.82482 24.0522 6.24831H22.2847Z" fill="#00579F" />
                                    <path d="M5.76497 6.55468L7.84745 0.778786H10.096L6.7536 9.24004H4.50495L2.59747 1.83283C3.94494 2.56304 5.1524 4.03159 5.53741 5.38326L5.76497 6.55468Z" fill="#00579F" />
                                    <path d="M3.83123 0.778778H0.41L0.375 0.949922C3.04377 1.65282 4.81124 3.34713 5.53742 5.38361L4.79369 1.49078C4.67124 0.949802 4.29496 0.796623 3.83123 0.778778Z" fill="#FAA61A" />
                                </svg>
                            </div>
                            <div className='border rounded py-1 px-2'>
                                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.51036 10.2815C8.51628 11.1194 7.2268 11.6252 5.81774 11.6252C2.67373 11.6252 0.125 9.10685 0.125 6.00024C0.125 2.89364 2.67373 0.375244 5.81774 0.375244C7.2268 0.375244 8.51628 0.881081 9.51036 1.719C10.5044 0.881081 11.7939 0.375244 13.203 0.375244C16.347 0.375244 18.8957 2.89364 18.8957 6.00024C18.8957 9.10685 16.347 11.6252 13.203 11.6252C11.7939 11.6252 10.5044 11.1194 9.51036 10.2815Z" fill="#ED0006" />
                                    <path d="M9.51038 10.2815C10.7344 9.24973 11.5105 7.71455 11.5105 6.00024C11.5105 4.28594 10.7344 2.75075 9.51038 1.71903C10.5045 0.881091 11.794 0.375244 13.203 0.375244C16.347 0.375244 18.8958 2.89364 18.8958 6.00024C18.8958 9.10685 16.347 11.6252 13.203 11.6252C11.794 11.6252 10.5045 11.1194 9.51038 10.2815Z" fill="#F9A000" />
                                    <path d="M9.51035 10.2815C10.7343 9.24978 11.5105 7.71458 11.5105 6.00027C11.5105 4.28595 10.7343 2.75075 9.51035 1.71902C8.28635 2.75075 7.51022 4.28595 7.51022 6.00027C7.51022 7.71458 8.28635 9.24978 9.51035 10.2815Z" fill="#FF5E00" />
                                </svg>

                            </div>
                            <div className='border rounded py-1 px-2'>
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.09944 10.4787V3.57691C9.00994 4.06601 10.2108 5.96807 9.71955 7.87012C9.39203 9.17439 8.40949 10.1526 7.09944 10.4787Z" fill="#0079BE" />
                                    <path d="M2.89625 6.1311C2.40498 8.03316 3.55127 9.98956 5.46177 10.4787V3.57691C4.2063 3.90298 3.22376 4.88118 2.89625 6.1311Z" fill="#0079BE" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.11687 13.2502H8.35488C11.8483 13.2502 14.6322 10.4787 14.7414 7.05497V7.00063C14.6868 3.52258 11.8483 0.696671 8.35488 0.751015H5.84394C2.51423 0.859704 -0.10588 3.68562 0.00329147 7.05497C0.00329147 10.4243 2.73257 13.1959 6.11687 13.2502ZM1.09505 7.0006C1.09505 4.17469 3.44223 1.83788 6.28068 1.83788C9.11912 1.83788 11.4663 4.17469 11.4663 7.0006C11.4663 9.82652 9.11912 12.1633 6.28068 12.1633C3.44223 12.1633 1.09505 9.82652 1.09505 7.0006Z" fill="#0079BE" />
                                </svg>

                            </div>
                        </div>

                        <div className='border-b'>
                            <div className='py-6 flex gap-4'>
                                <input className='outline-none p-4 w-1/2 border rounded-lg' placeholder='Name on card' type='text' />
                                <input className='outline-none p-4 w-1/2 border rounded-lg' placeholder='Card number' type='text' />
                            </div>
                            <div className='pb-8 flex gap-4'>
                                <input className='outline-none p-4 w-1/2 border rounded-lg' placeholder='Expiry date' type='text' />
                                <input className='outline-none p-4 w-1/2 border rounded-lg' placeholder='<CVV/CVC>' type='text' />
                            </div>
                        </div>
                        <div>
                            <div className='py-4'>
                                <div className='flex justify-between'>
                                    <div className='items-center flex gap-2 text-lg font-semibold text-gray-900 pb-1'>
                                        <h1 className=''>Total payable:</h1>
                                        <h1>$XXX</h1>
                                    </div>
                                    <button className='px-2  rounded-full text-sm bg-green-700 text-green-50'>
                                        <i className="fa-solid fa-piggy-bank pr-1"></i>
                                        {'You save <price>'}</button>
                                </div>
                                <div className='py-1 flex items-center gap-3 text-sm font-semibold '>
                                    <p className='underline'>You will be charged in AED</p>
                                    <i className="fa-solid fa-circle-info text-xs "></i>
                                </div>
                            </div>
                            <div className='py-4'>
                                <span>By clicking “confirm & pay”, you agree to <span className='text-blue-700 underline'>Tickete’s general terms  and conditions</span> and <span className='text-blue-700 underline'>cancellation policy </span>.</span>
                            </div>
                            <button className='px-8 py-4 text-white text-lg font-semibold rounded-2xl bg-black'>
                                <i className="fa-solid fa-lock pr-3"></i>
                                Confirm & pay</button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center bg-gray-50 border rounded-xl p-4 my-6'>
                        <div className='flex gap-4 items-center'>
                            <i className="fa-brands fa-apple-pay bg-gray-300 px-1 rounded"></i>
                            <p className='font-semibold text-gray-400'>Coming soon</p>
                        </div>
                        <div className='w-4 h-4 rounded-full bg-gray-300'>

                        </div>
                    </div>
                    <div className='flex justify-between items-center bg-gray-50 border rounded-xl p-4 my-6'>
                        <div className='flex gap-4 items-center'>
                            <i className="fa-brands fa-google-pay bg-gray-300 px-1 rounded"></i>
                            <p className='font-semibold text-gray-400'>Coming soon</p>
                        </div>
                        <div className='w-4 h-4 rounded-full bg-gray-300'>

                        </div>
                    </div>
                    <div className='border mb-6'></div>
                    <div>
                        <div className='py-4 font-semibold text-2xl text-gray-900'>
                            <p>Total Payable: $XXX</p>
                        </div>
                        <div className='text-gray-900 text-sm flex gap-2 p-4     border rounded-2xl'>
                            <i className="fa-solid fa-circle-info text-xs pt-1"></i>
                            <div>
                                <p>You will be charged in AED</p>
                                <p className='text-gray-400'>The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingDetail