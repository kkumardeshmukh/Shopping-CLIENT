import React from 'react'

const ForgotPassword = () => {
    return (
        <>
            <div style={{ minHeight: "80vh" }} className="grid justify-center content-center overflow-y-auto">
                <div style={{ boxShadow: "10px 5px 5px gray" }} className="w-80 h-fit bg-slate-200 mb-auto flex flex-col content-center rounded-xl justify-center">
                    <div className="mt-4 font-serif flex justify-center underline">
                        RESET PASSWORD
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
                            {/* answer */}
                            <div className="flex justify-center w-full">
                                <input className="my-1 w-4/5 p-1 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="text"
                                    placeholder="Which is your fav. SPORT"
                                    name='name'
                                ></input>
                            </div>
                            {/* new password  */}
                            <div className="flex justify-center w-full">
                                <input className="my-1 w-4/5 p-1 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="password"
                                    placeholder="Enter new Password"
                                    name='name'
                                ></input>
                            </div>

                            <div className="flex justify-center content-center">
                                <button className="bg-blue-500 px-4 m-4 rounded-lg hover:bg-blue-800 hover:text-white">CHANGE-PASSWORD</button>


                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
