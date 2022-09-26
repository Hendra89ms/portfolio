import React from 'react'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]


    return (
        <nav className='flex justify-between items-center h-[70px] text-white font-bold'>
            <h1 className='text-2xl pl-10 select-none'>Hendra <span className='text-[#0891B2]'>Manase</span> Sitorus</h1>


            <ul className='hidden md:flex lg:flex items-center gap-7 pl-16 bg-white rounded-bl-full h-[70px] w-[500px]'>
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="flex gap-5 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200 hover:text-[#0891B2]"
                    >
                        {link}
                    </li>
                ))}
            </ul>
            <div className='pr-4  cursor-pointer md:hidden duration-300' onClick={() => setNav(!nav)}>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

            </div>

        </nav>
    )
}

export default Navbar