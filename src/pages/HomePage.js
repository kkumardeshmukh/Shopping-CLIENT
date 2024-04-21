import React from 'react'
import { useAuth } from '../context/Auth'

const HomePage = () => {

    const [auth, setAuth] = useAuth()
    return (
        <>
            <div style={{ minHeight: "80vh" }}>

                HomePage
                <pre>{JSON.stringify(auth, null, 4)}</pre>
            </div>

        </>
    )
}

export default HomePage
