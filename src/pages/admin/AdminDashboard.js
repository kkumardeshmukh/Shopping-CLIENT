import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Adminmenu from '../../components/Layouts/Adminmenu'
import { useAuth } from '../../context/Auth'

const AdminDashboard = () => {

    const [auth] = useAuth()
    return (
        <Layout>
            <div className="container-fluid mt-3">

                <div className="row">

                    <div className="col-md-3 mt-3"><Adminmenu /></div>
                    <div className="col-md-9">
                        <div className="card mt-5 w-75">
                            <div className="card-body">
                                <p>ADMIN NAME: {auth?.user?.name}</p>
                                <p>ADMIN EMAIL: {auth?.user?.email}</p>
                                <p>ADMIN PHONE NO.: {auth?.user?.phone}</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard
