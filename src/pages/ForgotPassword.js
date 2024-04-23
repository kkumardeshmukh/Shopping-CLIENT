import React from 'react'
import Layout from '../components/Layouts/Layout'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [answer, setAnswer] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post('http://localhost:8080/api/v1/user/forgotpassword', { email, answer, newPassword })

        console.log(res)
        navigate("/login")
        alert(res.data.message)

    }

    return (
        <Layout>
            <div style={{ minHeight: "80vh" }} className="grid justify-center content-center overflow-y-auto">
                <div style={{ boxShadow: "5px 5px 5px gray" }} className="w-80 h-fit bg-slate-200 mb-auto flex flex-col content-center rounded-xl justify-center">
                    <div className="mt-4 font-serif flex justify-center underline">
                        RESET PASSWORD
                    </div>

                    {/* actual form begins */}

                    <div className="flex justify-center w-full">
                        <form onSubmit={handleSubmit} className="w-full flex justify-center flex-col" action="">
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
                            {/* answer */}
                            <div className="flex justify-center w-full">
                                <input className="my-1 w-4/5 p-1 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="text"
                                    placeholder="Which is your fav. SPORT"
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                    required
                                ></input>
                            </div>
                            {/* new password  */}
                            <div className="flex justify-center w-full">
                                <input className="my-1 w-4/5 p-1 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="password"
                                    placeholder="Enter new Password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                ></input>
                            </div>

                            <div className="flex justify-center content-center">
                                <button type="submit" className="bg-blue-500 px-4 m-4 rounded-lg hover:bg-blue-800 hover:text-white">CHANGE-PASSWORD</button>


                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ForgotPassword
