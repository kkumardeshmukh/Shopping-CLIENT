import React from 'react'
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
            <div>
                <div style={{ minHeight: "80vh" }} className="w-full grid justify-center content-center border-2 border-solid border-red-600 ">
                    <div style={{ boxShadow: "10px 5px 5px gray" }} className="w-80 h-full bg-slate-200 mb-auto flex flex-col content-center rounded-xl justify-center ">
                        <div className="mt-4 font-serif flex justify-center underline">
                            LOGIN
                        </div>

                        {/* actual form begins */}

                        <div className="flex justify-center w-full">
                            <form className="w-full flex justify-center flex-col" action="">
                                {/* email */}
                                <div className="flex justify-center w-full">
                                    <input className="my-1 w-4/5 p-1 bg-transparent border-b-2 border-black focus:outline-none"
                                        type="email"
                                        placeholder="Enter your Email"
                                        name='name'
                                    ></input>
                                </div>
                                {/* password */}
                                <div className="flex justify-center w-full">
                                    <input className="my-1 w-4/5 p-1 bg-transparent border-b-2 border-black focus:outline-none"
                                        type="password"
                                        placeholder="Enter your Password"
                                        name='name'
                                    ></input>
                                </div>

                                <div className="flex justify-center content-center">
                                    <button className="bg-blue-500 px-4 m-4 rounded-lg hover:bg-blue-800 hover:text-white shadow-lg">LOGIN</button>
                                    <p className="mt-4 underline text-sm text-blue-500 cursor-pointer hover:text-black" ><Link to="/forgot-password">forgot password</Link></p>

                                </div>



                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
