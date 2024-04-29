import React from 'react'

const CategoryForm = () => {
    return (
        <>
            <form classname="w-80 mt-2">
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Enter a name of category" />
                </div>
                <button type="submit" className="btn btn-primary">Create Category</button>
            </form>

        </>
    )
}

export default CategoryForm