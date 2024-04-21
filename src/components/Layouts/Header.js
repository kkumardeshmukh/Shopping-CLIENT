import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiShoppingBag } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
    return (

        <>
            <div className="ml-0 h-12 content-center bg-slate-300 shadow-lg w-full">
                <div className="flex justify-between content-center">
                    <div className="flex">
                        <div className="grid justify-center content-center text-xl ml-3"><GiShoppingBag /></div>
                        <div className="ml-2 font-serif text-2xl  mt-1 md:mt-3 lg:mt-3">SHOPPING APP</div>
                    </div>

                    <div className="mr-5 grid content-center">
                        <ul className="font-serif md:flex mb-4 hidden">
                            <li className="px-3 pt-4"><NavLink to='/'>Home</NavLink></li>
                            <li className="px-3 pt-4"><NavLink to='#'>Catagories</NavLink></li>
                            <li className="px-3 pt-4"><NavLink to='/register'>Register</NavLink></li>
                            <li className="px-3 pt-4"><NavLink to='/login'>Login</NavLink></li>
                            <li className="px-3 pt-4"><NavLink to='#'>Cart(0)</NavLink></li>
                        </ul>
                    </div>

                    <div className="mr-5 mt-2 text-2xl md:hidden">
                        <GiHamburgerMenu />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header
