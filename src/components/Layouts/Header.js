import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiShoppingBag } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from '../../context/Auth';

const Header = () => {

    const [auth, setAuth] = useAuth()

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ""
        })
        localStorage.removeItem('auth')
    }
    // ml-2 font-serif text-2xl  mt-3 md:mt-3 lg:mt-3

    return (

        <>
            <div className="ml-0 h-12 content-center bg-slate-300 shadow-lg w-full">
                <div className="flex justify-between content-center">
                    <div className="flex">
                        <div className="grid justify-center content-center text-4xl ml-3"><GiShoppingBag /></div>
                        <div className="grid content-center text-2xl font-serif ml-2">SHOPPING APP</div>
                    </div>

                    <div className="mr-5 grid content-center">
                        <ul className="font-serif md:flex mb-4 hidden content-center mt-1">
                            <li className="px-2 pt-4 hover:underline"><NavLink to='/'>Home</NavLink></li>
                            <li className="px-2 pt-4 hover:underline"><NavLink to='#'>Catagories</NavLink></li>



                            {/* design nav bar properly .................at production  */}
                            {!auth.user ?
                                (<>
                                    <li className="px-2 pt-4 hover:underline  "><NavLink to='/register'>Register</NavLink></li>
                                    <li className="px-2 pt-4"><NavLink to='/login'>Login</NavLink></li>
                                </>) :
                                (<>
                                    <li className="px-2 pt-4  "><NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>{auth?.user.name}</NavLink></li>
                                    <li className="px-2 pt-4"><NavLink to='/login' onClick={handleLogout} >Logout</NavLink></li>
                                </>)}
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

