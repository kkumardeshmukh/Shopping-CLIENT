import React from 'react'
import Layout from '../components/Layouts/Layout'

const Contact = () => {
    return (
        <Layout>
            <div style={{ minHeight: "80vh" }} className="grid content-center justify-center">
                <div className="max-w-[50rem] max-h-80 ">
                    <div className="bg-slate-800 text-white py-5 text-center mb-2 relative z-10 min-w-[50rem]">CONTACT US</div>
                    <div className="overflow-y-auto max-h-60 min-h-60 text-center">
                        <p className="py-2 font-semibold">Phone : 8975424083</p>
                        <p className="py-2 font-semibold">Email : kkdesh831@gmail.com</p>
                        <p className="py-2 font-semibold">WhatsApp : 1234567890</p>
                        <p className="py-2 font-semibold">Address : karvenagar, Pune </p>
                        <p className="py-2 font-semibold">facebook : facebook.com/Shopping_app</p>
                        <p className="py-2 font-semibold">Instagram_id: ShoppingApp7171</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
