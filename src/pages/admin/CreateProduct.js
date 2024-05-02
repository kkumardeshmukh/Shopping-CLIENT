import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Layout from '../../components/Layouts/Layout'
import Adminmenu from '../../components/Layouts/Adminmenu'
// import { Select } from 'antd'
// // destructure select for geting option to direct use 
// const { Option } = Select

const CreateProduct = () => {

    const navigate = useNavigate()

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState("")
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

    const handleCreateProduct = async (e) => {
        e.preventDefault()

        try {

            const productData = new FormData()
            productData.append("name", name)
            productData.append("description", description)
            productData.append("price", price)
            productData.append("quantity", quantity)
            productData.append("category", category)
            productData.append("photo", photo)
            productData.append("shipping", shipping)

            console.log(category, shipping)

            const { data } = await axios.post('http://localhost:8080/api/v1/product/create-product', productData)

            console.log(data)

            if (data.success) {
                alert('product created successfully')
                navigate('/dashboard/admin/products')

            } else {
                alert('something went wrong')
            }

        } catch (error) {
            console.log(error)
        }
    }

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
                            {/* <form > */}
                            <div>
                                <select
                                    className="form-select my-4 p-3 w-75"
                                    onChange={(e) => setCategory(e.target.value)}>
                                    <option value={null}>Select Category</option>

                                    {categories.map(c => (
                                        <option key={c._id} value={c._id}>{c.name}</option>
                                    ))}
                                </select>
                                <p>{category}</p>
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
                                    placeholder="Product Description"
                                    value={description}
                                    className="form-control my-3"
                                    onChange={(e) => { setDescription(e.target.value) }}
                                />
                                <input type="number"
                                    placeholder="product Price"
                                    value={price}
                                    className="form-control my-3"
                                    onChange={(e) => { setPrice(e.target.value) }}
                                />
                                <input type="number"
                                    placeholder="product Quantity"
                                    value={quantity}
                                    className="form-control my-3"
                                    onChange={(e) => { setQuantity(e.target.value) }}
                                />

                            </div>
                            <div>
                                <select
                                    className="form-select my-4 p-3 w-75"
                                    onChange={(e) => { setShipping(e.target.value) }}>
                                    <option>Shipping</option>
                                    <option value={false}>No</option>
                                    <option value={true}>Yes</option>
                                </select>
                                <p>{shipping}</p>
                            </div>
                            <div className="mb-5">
                                <button className="btn btn-primary w-75" type="submit" onClick={handleCreateProduct}>Create Product</button>
                            </div>
                            {/* </form> */}



                        </div>



                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default CreateProduct
