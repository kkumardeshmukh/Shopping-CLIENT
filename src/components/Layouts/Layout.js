import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <>
            <Header></Header>
            <main style={{ minHeight: "80vh" }}>
                <div className="overflow-y-auto">
                    {props.children}
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout
