import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Image src="/images/logo.png" width={150} height={48} className='mr-5' />
                    <Link className="text-white text-xl" href="/">Fullstack Development</Link>
                </div>
                <div className="flex space-x-4">
                    <Link className="text-white" href="/">Inicio</Link>
                    <Link className="text-white" href="/about">Acerca</Link>
                    <Link className="text-white" href="/projects">Proyectos</Link>
                </div>
            </div>
        </nav>)
}

export default NavBar