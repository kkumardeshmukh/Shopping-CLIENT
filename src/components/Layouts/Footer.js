import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="content-center h-20 bg-slate-900 text-center text-white">
                <div>All right reserved &copy; jk group</div>
                <div>
                    <p>
                        <Link className="mx-2 text-sm text-blue-700 hover:text-white hover:underline" to="/about">About</Link>|
                        <Link className="mx-2 text-sm text-blue-700 hover:text-white hover:underline" to="/contact">Contact Us</Link>|
                        <Link className="mx-2 text-sm text-blue-700 hover:text-white hover:underline" to="/policy">Privacy Policy</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
