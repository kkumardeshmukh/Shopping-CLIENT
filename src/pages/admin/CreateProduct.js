import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Adminmenu from '../../components/Layouts/Adminmenu'

const CreateProduct = () => {
    return (
        <Layout>
            <div className="container-fluid mt-3">

                <div className="row">

                    <div className="col-md-3 mt-3"><Adminmenu /></div>
                    <div className="col-md-9">Create category</div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateProduct
