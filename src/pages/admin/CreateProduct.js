import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../../components/Layouts/Layout'
import Adminmenu from '../../components/Layouts/Adminmenu'
// import { Select } from 'antd'
// // destructure select for geting option to direct use 
// const { Option } = Select

const CreateProduct = () => {

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [shipping, setShipping] = useState("")
    const [photo, setPhoto] = useState("")


    const getAllCategory = async () => {

        try {

            const { data } = await axios.get('http://localhost:8080/api/v1/category/get-category')
            console.log(data)
            if (data?.success) {
                setCategories(data.Categories)
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
                    <div className="col-md-9">

                        <div className="text-2xl font-semibold mt-[0.9rem]">
                            PRODUCTS
                        </div>
                        <div>
                            <div>
                                <select
                                    //add a search option on dropdown
                                    bordered={false}
                                    placeholder="Select a category of product" size='large'
                                    className="form-select my-4 p-3 w-75"
                                    onChange={(value) => { setCategory(value) }}>
                                    <option>Select Category</option>

                                    {categories.map(c => (
                                        <option key={c._id} value={c.name}>{c.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="btn btn-outline-secondary w-75">
                                    {photo ? photo.name : "Upload Image"}
                                    <input
                                        type="file"
                                        name="photo"
                                        accept="image/*"
                                        onChange={(e) => { setPhoto(e.target.files[0]) }}
                                        hidden
                                    >
                                    </input>

                                </label>
                            </div>
                            <div className="w-75 mt-4">
                                {photo && (
                                    <div className="grid content-center justify-center ">
                                        <img
                                            src={URL.createObjectURL(photo)}
                                            alt="product photo"
                                            className='img img-responsive max-h-40 rounded-lg'
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="w-75 my-4">
                                <input type="text"
                                    placeholder="Product Name"
                                    value={name}
                                    className="form-control my-3"
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                                <textarea
                                    placeholder="Product Name"
                                    value={description}
                                    className="form-control my-3"
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                                <input type="text"
                                    placeholder="Product Name"
                                    value={description}
                                    className="form-control my-3"
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>



                        </div>



                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default CreateProduct
