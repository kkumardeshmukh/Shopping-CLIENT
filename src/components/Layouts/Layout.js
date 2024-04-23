import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (prop) => {
    return (
        <div>
            <Header />
            <main style={{ minHeight: "80vh" }}>
                {prop.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
