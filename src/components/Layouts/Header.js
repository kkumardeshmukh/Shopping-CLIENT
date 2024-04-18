import React from 'react'

const Header = () => {
    return (

        <>
            <div className="h-12 content-center bg-slate-300 shadow-lg">
                <div className="flex justify-between">
                    <div className="ml-5 font-serif">SHOPPING APP</div>
                    <div className="mr-5 flex flex-row">
                        <ul className="font-semibold">
                            <li className="inline px-3">Home</li>
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
