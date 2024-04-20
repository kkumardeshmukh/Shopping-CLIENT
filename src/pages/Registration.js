import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Registration = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [answer, setAnswer] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('http://localhost:8080/api/v1/user/register', { name, email, phone, address, password, answer })

            console.log(res.data.user)

            if (res.data.success) {
                alert(res.data.message)
                navigate("/login")
            }
            else {
                alert(res.data.message)
            }


        } catch (error) {
            console.log(error)

        }

    }


    return (
        <>
            <div style={{ minHeight: "80vh" }} className="grid justify-center content-center overflow-y-auto ">
                <div style={{ boxShadow: "10px 5px 5px gray" }} className="w-80 h-fit bg-slate-200 mt-10 mb-auto flex flex-col content-center rounded-xl">
                    <div className="mt-4 font-serif flex justify-center underline">
                        REGISTER HERE
                    </div>

                    {/* actual form bigins */}

                    <div className="flex justify-center w-full">
                        <form className="w-full flex justify-center flex-col" onSubmit={handleSubmit} action="">
                            {/* name */}
                            <div className="flex justify-center w-full">
                                <input className="my-1 w-4/5 p-1 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="text"
                                    placeholder="Enter your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required

                                ></input>
                            </div>
                            {/* email */}
                            <div className="flex justify-center w-full">
                                <input className="my-1 w-4/5 p-1 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="email"
                                    placeholder="Enter your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required

                                ></input>
                            </div>
                            {/* phone */}
                            <div className="flex justify-center w-full">
                                <input className="my-1 w-4/5 p-1 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="text"
                                    placeholder="Enter your Phone No."
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required

                                ></input>
                            </div>
                            {/* address */}
                            <div className="flex justify-center w-full">
                                <input className="my-1 w-4/5 p-1 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="text"//make it text area in production 
                                    placeholder="Enter your Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required

                                ></input>
                            </div>
                            {/* Password */}
                            <div className="flex justify-center w-full">
                                <input className="my-1 w-4/5 p-1 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="password"
                                    placeholder="Enter your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required

                                ></input>
                            </div>
                            {/* Answer */}
                            <div className="flex justify-center w-full">
                                <input className="my-1 w-4/5 p-1 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="text"
                                    placeholder="Which is you fav. SPORT"
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                    required

                                ></input>
                            </div>


                            <div className="flex justify-center content-center">
                                <button type="submit" className="bg-blue-500 px-4 m-4 rounded-lg hover:bg-blue-800 hover:text-white">REGISTER</button>
                                <button className="bg-blue-500 px-4 m-4 rounded-lg hover:bg-blue-800 hover:text-white">Cancel</button>

                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration
