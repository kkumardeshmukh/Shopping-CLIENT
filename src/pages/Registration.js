import React from 'react'

const Registration = () => {
    return (
        <>
            <div className="flex justify-center content-center h-screen overflow-y-auto bg-blue-50 ">
                <div style={{ boxShadow: "10px 5px 5px gray" }} className="w-80 h-fit bg-slate-200 mt-10 mb-auto flex flex-col content-center rounded-xl">
                    <div className="mt-4 font-serif flex justify-center underline">
                        REGISTER HERE
                    </div>

                    {/* actual form bigins */}

                    <div className="flex justify-center w-full">
                        <form className="w-full flex justify-center flex-col" action="">
                            {/* name */}
                            <div className="flex justify-center w-full">
                                <input className="my-3 w-4/5 p-2 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="text"
                                    placeholder="Enter your Name"
                                    name='name'
                                ></input>
                            </div>
                            {/* email */}
                            <div className="flex justify-center w-full">
                                <input className="my-3 w-4/5 p-2 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="text"
                                    placeholder="Enter your Email"
                                    name='name'
                                ></input>
                            </div>
                            {/* phone */}
                            <div className="flex justify-center w-full">
                                <input className="my-3 w-4/5 p-2 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="text"
                                    placeholder="Enter your Phone No."
                                    name='name'
                                ></input>
                            </div>
                            {/* address */}
                            <div className="flex justify-center w-full">
                                <input className="my-3 w-4/5 p-2 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="text"//make it text area in production 
                                    placeholder="Enter your Address"
                                    name='name'
                                ></input>
                            </div>
                            {/* Password */}
                            <div className="flex justify-center w-full">
                                <input className="my-3 w-4/5 p-2 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="password"
                                    placeholder="Enter your Name"
                                    name='name'
                                ></input>
                            </div>
                            {/* Answer */}
                            <div className="flex justify-center w-full">
                                <input className="my-3 w-4/5 p-2 bg-transparent border-b-2 border-black focus:outline-none"
                                    type="text"
                                    placeholder="Which is you fav. SPORT"
                                    name='name'
                                ></input>
                            </div>


                            <div className="flex justify-center content-center">
                                <button className="bg-blue-500 px-4 m-4 rounded-lg hover:bg-blue-800 hover:text-white">REGISTER</button>
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
