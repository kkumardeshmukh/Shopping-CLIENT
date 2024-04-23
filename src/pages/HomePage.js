import React from 'react'
import { useAuth } from '../context/Auth'
import Layout from '../components/Layouts/Layout'

const HomePage = () => {

    const [auth, setAuth] = useAuth()
    return (
        <Layout>
            <div style={{ minHeight: "80vh" }}>

                HomePage
                <pre>{JSON.stringify(auth, null, 4)}</pre>
            </div>

        </Layout>
    )
}

export default HomePage
