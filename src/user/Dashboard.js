import React from 'react'
import Layout from '../components/Layouts/Layout'
import Usermenu from '../components/Layouts/Usermenu'
import { useAuth } from '../context/Auth'


const AdminDashboard = () => {

    const [auth] = useAuth()
    return (
        <Layout>
            <div className="container-fluid mt-3">

                <div className="row">

                    <div className="col-md-3 mt-3"><Usermenu /></div>
                    <div className="col-md-9">
                        <div class="card mt-5 w-75">
                            <div class="card-body">
                                <p>USER NAME: {auth?.user?.name}</p>
                                <p>USER EMAIL: {auth?.user?.email}</p>
                                <p>USER PHONE NO.: {auth?.user?.phone}</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard
