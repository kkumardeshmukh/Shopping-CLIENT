import React from 'react'

const CategoryForm = ({ handleSubmit, value, setValue }) => {
    return (
        <>
            <div className="mx-2 my-2">


                <form classname=" mt-2 " onSubmit={handleSubmit}>
                    <div className="w-80 mb-2 mt-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a name of category"
                            value={value}
                            onChange={(e) => setValue(e.target.value)} />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </>
    )
}

export default CategoryForm