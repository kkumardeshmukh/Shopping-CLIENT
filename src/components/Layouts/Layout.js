import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <>
            <Header></Header>
            <main>
                <div className="h-screen">
                    {props.children}
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout
