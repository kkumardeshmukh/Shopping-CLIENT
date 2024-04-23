import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Spinner = ({ path = 'login' }) => {

    const [count, setCount] = useState(5)

    const navigate = useNavigate()
    const location = useLocation()


    //understand the use of this block how setcount take value of count 
    useEffect(() => {

        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000);
        count === 0 && navigate(`/${path}`, {
            state: location.pathname,
        })
        return () => clearInterval(interval);

    }, [count, navigate, location, path])


    return (
        <>
            <div className="h-screen grid content-center justify-center min-w-full">
                <div className="d-flex justify-content-center text-primary">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div className="mt-3 md:text-2xl font-semibold text-blue-500 shadow-black ">
                    REDIRECTING IN {count} SECONDS
                </div>

            </div >

        </>
    )
}

export default Spinner
