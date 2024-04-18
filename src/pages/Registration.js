import React from 'react'

const Registration = () => {
    return (
        <>
            <div className="flex mt-20 justify-center">
                <div className="w-80 h-96 bg-slate-400 flex flex-col content-center">
                    <div className="mt-2 font-serif flex justify-center underline border-2 border-solid border-blue-700">
                        REGISTRATION FORM
                    </div>
                    <div className="flex justify-center w-full border-2 border-solid border-blue-700">
                        <form className="border-2 border-solid border-blue-700 w-full flex justify-center" action="">
                            <input className="my-3 w-4/5"
                                type="text"
                                placeholder="Enter your name"
                                name='name'
                            ></input>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration
