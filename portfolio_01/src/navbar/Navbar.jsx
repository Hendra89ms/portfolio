import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between pl-10 items-center h-[70px] text-white font-bold'>
            <h1 className='text-2xl select-none'>Hendra <span className='text-[#0891B2]'>Manase</span> Sitorus</h1>

            <menu className='flex-none'>
                <ul className='flex items-center justify-center gap-[40px] bg-white w-[500px] text-black h-[70px] rounded-bl-full'>
                    <li>
                        <a href="#home" className='hover:text-[#0891B2] duration-300'>Home</a>
                    </li>
                    <li>
                        <a href="#about" className='hover:text-[#0891B2] duration-300'>About</a>
                    </li>
                    <li>
                        <a href="skils" className='hover:text-[#0891B2] duration-300'>Skills</a>
                    </li>
                    <li>
                        <a href="#project" className='hover:text-[#0891B2] duration-300'>Project</a>
                    </li>
                    <li><a href="#Contact" className='hover:text-[#0891B2] duration-300'>
                        Contact
                    </a>
                    </li>
                </ul>
            </menu>
        </nav>
    )
}

export default Navbar