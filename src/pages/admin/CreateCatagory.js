import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../../components/Layouts/Layout'
import Adminmenu from '../../components/Layouts/Adminmenu'
import CategoryForm from '../../components/CategoryForm'

const CreateCategory = () => {

    const [category, setCategory] = useState([])
    const [name, setName] = useState("")
    const [selected, setSelected] = useState(null)
    const [updatedName, setUpdatedName] = useState("")


    //handling form 

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const { data } = await axios.post('http://localhost:8080/api/v1/category/create-category', { name })

            if (data?.success) {
                alert('New Category Added')
                getAllCategory()
                setName("")
            }
            else {
                alert(data.message)
            }

        } catch (error) {
            console.log(error)
            alert('Add some name')

        }

    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {

            const { data } = await axios.put(`http://localhost:8080/api/v1/category/update-category/${selected}`, { name: updatedName })

            setSelected(null)
            setUpdatedName("")
            getAllCategory()
            alert(data.message)

        } catch (error) {
            console.log(error)
            alert('Something Went Wrong')

        }

    }

    const handledelete = async (id) => {

        try {

            const { data } = await axios.delete(`http://localhost:8080/api/v1/category/delete-category/${id}`)

            getAllCategory()



        } catch (error) {
            console.log(error)
        }
    }


    const getAllCategory = async () => {

        try {

            const { data } = await axios.get('http://localhost:8080/api/v1/category/get-category')
            console.log(data)
            if (data.success) {
                setCategory(data.Categories)
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllCategory()
    }, []);

    return (
        <Layout>
            <div className="container-fluid mt-3">

                <div className="row">

                    <div className="col-md-3 mt-3"><Adminmenu /></div>
                    <div className="col-md-9 ">
                        <div className="text-2xl font-semibold mt-[0.9rem]">
                            CATEGORIES
                        </div>
                        <div>
                            <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
                        </div>
                        <div className="col-md-9 mt-4">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Categories</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {category?.map(c => (
                                        <>
                                            <tr className="bg-light rounded-md">
                                                <td key={c._id}>{c.name}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary mr-2" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                        onClick={() => {
                                                            setUpdatedName(c.name)
                                                            setSelected(c._id)
                                                        }}>
                                                        Edit
                                                    </button>
                                                    <button type="button" className="btn btn-danger ml-2"
                                                        onClick={() => { handledelete(c._id) }}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>


                        </div>
                    </div>
                    <div>

                        {/* Modal */}

                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Update Category Name</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    {/* modal body */}
                                    <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate} />
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default CreateCategory
