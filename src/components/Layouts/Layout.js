import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <>
            <Header></Header>
            <main style={{ maxHeight: "50%" }}>
                <div className="overflow-y-auto">
                    {props.children}
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout
