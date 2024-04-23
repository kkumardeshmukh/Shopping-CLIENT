import React from 'react'
import Layout from '../components/Layouts/Layout'

const About = () => {
    return (
        <Layout>
            <div style={{ minHeight: "80vh" }} className="grid content-center justify-center">
                <div className="max-w-[50rem] max-h-80 ">
                    <div className="bg-slate-800 text-white py-5 text-center mb-2 relative z-10">ABOUT US</div>
                    <div className="overflow-y-auto max-h-60 min-h-60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore aperiam unde maxime eaque distinctio dolor explicabo doloribus debitis beatae blanditiis nulla, voluptates perferendis neque accusamus earum nisi quasi molestiae maiores natus quo at sapiente voluptatum. Quisquam sapiente amet quos laboriosam eligendi quod. Beatae hic magnam voluptatum quis? Doloribus maxime praesentium a eligendi quidem suscipit laudantium eveniet ipsa non ipsum illum consequatur odio ducimus optio, repudiandae ut odit saepe quasi perferendis libero neque corporis! Quis ea, aliquam.
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default About
