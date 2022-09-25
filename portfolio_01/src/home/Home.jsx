import React from 'react'
import PhotoMe from '../assets/img/photome2-removebg-preview.png'

const Home = () => {
    return (
        <div className='flex justify-center gap-[100px] font-bold mt-10 '>
            <div className='bg-slate-600 rounded-full w-[500px] h-[500px] box-border flex items-center justify-center bg-cover '>
                <img src={PhotoMe} alt="photoMe" className='w-[400px] h-[400px]  mb-14' />
            </div>

            <div className='text-white mt-11 flex flex-col gap-7'>
                <h2 className='text-5xl text-[#0891B2]'>Hello !</h2>
                <h1 className='text-2xl'>My Name is <span className='text-3xl'>Hendra Manase Sitorus</span></h1>
                <h3 className='text-2xl text-slate-500'>Front-End Developer</h3>
                <button className='bg-[#0891B2] w-[200px] h-[40px] rounded-3xl'>Contact Me</button>
                <div className='flex gap-10 mt-3 items-center text-slate-500'>
                    <a href="email.com" >
                        <iconify-icon icon="eva:email-fill" width="30px" ></iconify-icon>
                    </a>
                    <a href="github.com">
                        <iconify-icon icon="akar-icons:github-fill" width="30px"></iconify-icon>
                    </a>
                    <a href="telegram.com">
                        <iconify-icon icon="akar-icons:telegram-fill" width="30px"></iconify-icon>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Home