import React, { useEffect } from 'react'
import axios from 'axios'
import Layout from '../../components/Layouts/Layout'
import Adminmenu from '../../components/Layouts/Adminmenu'
import CategoryForm from '../../components/CategoryForm'

const CreateCategory = () => {

    const getAllCategory = async () => {

        const res = await axios.get('http://localhost:8080/api/v1/category/get-category')

        console.log(res.data)
    }

    useEffect(() => {
        getAllCategory()
    }, []);




    return (
        <Layout>
            <div className="container-fluid mt-3">

                <div className="row">

                    <div className="col-md-3 mt-3"><Adminmenu /></div>
                    <div className="col-md-9 border-2 border-solid border-red-600">
                        <div className="text-2xl font-semibold mt-[0.8rem]">
                            CATEGORIES
                        </div>
                        <div>
                            <CategoryForm />
                        </div>
                        <div className="col-md-9 border-2 border-solid border-red-600 mt-4">
                            <table class="table">
                                <thead>
                                    <tr>

                                        <th scope="col">Categories</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>Mark</td>
                                        <td>Otto</td>

                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateCategory
