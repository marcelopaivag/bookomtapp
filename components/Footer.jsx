import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                 
            <Image src="/images/logo.png" alt="Logo" width={200} height={60} className='mr-10' />

                <div className="flex-grow">
                    <h4 className="text-lg font-bold mb-2">Enlaces útiles</h4>
                    <ul className="list-none p-0">
                        <li className="mb-1">
                            <a href="#">Inicio</a>
                        </li>
                        <li className="mb-1">
                            <a href="#">Acerca</a>
                        </li>
                        <li className="mb-1">
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                </div>

                <div className="flex-grow">
                    <h4 className="text-lg font-bold mb-2">Contacto</h4>
                    <ul className="list-none p-0">
                        <li className="mb-1">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                            Av. Florencio Barrios #12523 - Local 1B. Las Condes - Santiago.
                            </a>
                        </li>
                        <li className="mb-1">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                            contacto@contacto.cl
                            </a>
                        </li>
                        <li className="mb-1">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                            + 01 234 567 88
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer