import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='text-center mt-80'>
            <h1 className='text-5xl text-red-500'>
                404 - Page Not Found
            </h1>
            <p className='text-xl'>
                The page you are looking for does not exist.
            </p>
            <p className='text-lg'>
                Please check the URL or return to the homepage.
            </p>
            <button className='bg-red-500 p-4 rounded-4xl'>
                <Link href="/">
                    return Home
                </Link>
            </button>
        </div>
    )
}

export default NotFound
