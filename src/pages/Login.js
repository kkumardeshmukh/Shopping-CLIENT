import { useState } from 'react'
import { Link } from "react-router-dom"
import axios, { formToJSON } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Auth'

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useAuth()


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('http://localhost:8080/api/v1/user/login', { email, password })
            console.log(res.data.user)
            console.log(res.data.token)
            setAuth({
                ...auth,
                user: res.data.user,
                token: res.data.token
            })
            localStorage.setItem('auth', JSON.stringify(res.data))
            navigate("/")

        } catch (error) {

            console.log(error)

        }

    }




    return (
        <>
            <div>
                <div style={{ minHeight: "80vh" }} className="w-full grid justify-center content-center ">
                    <div style={{ boxShadow: "5px 5px 5px gray" }} className="w-80 h-full bg-slate-200 mb-auto flex flex-col content-center rounded-xl justify-center ">
                        <div className="mt-4 font-serif flex justify-center underline">
                            LOGIN
                        </div>

                        {/* actual form begins */}

                        <div className="flex justify-center w-full">
                            <form className="w-full flex justify-center flex-col" onSubmit={handleSubmit} action="">
                                {/* email */}
                                <div className="flex justify-center w-full">
                                    <input className="my-1 w-4/5 p-1 bg-transparent border-b-2 border-black focus:outline-none"
                                        type="email"
                                        placeholder="Enter your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                                </div>
                                {/* password */}
                                <div className="flex justify-center w-full">
                                    <input className="my-1 w-4/5 p-1 bg-transparent border-b-2 border-black focus:outline-none"
                                        type="password"
                                        placeholder="Enter your Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    ></input>
                                </div>

                                <div className="flex justify-center content-center">
                                    <button type="submit" className="bg-blue-500 px-4 m-4 rounded-lg hover:bg-blue-800 hover:text-white shadow-lg">LOGIN</button>
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
