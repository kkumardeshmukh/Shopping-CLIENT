import React from 'react'

const Header = () => {
    return (

        <>
            <div className="h-12 content-center bg-slate-300 shadow-lg">
                <div className="flex justify-between">
                    <div className="ml-5 font-serif text-2xl">SHOPPING APP</div>
                    <div className="mr-5 grid content-center">
                        <ul className="font-serif">
                            <li className="inline px-3 pt-4">Home</li>
                            <li className="inline px-3">Catagories</li>
                            <li className="inline px-3">Register</li>
                            <li className="inline px-3">Login</li>
                            <li className="inline px-3">Cart(0)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header
