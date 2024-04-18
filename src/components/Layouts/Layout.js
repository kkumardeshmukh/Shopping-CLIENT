import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <>
            <Header></Header>
            <main className="min-h-20">
                {props.children}
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout
