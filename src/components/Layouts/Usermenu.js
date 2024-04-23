import React from 'react'
import { NavLink } from 'react-router-dom'

const Usermenu = () => {
    return (
        <>
            <div className="text-center">
                <div className="list-group">

                    <p className="text-2xl font-semibold">USER PANEL</p>

                    <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Profile</NavLink>
                    <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</NavLink>

                </div>

            </div>


        </>
    )
}

export default Usermenu
