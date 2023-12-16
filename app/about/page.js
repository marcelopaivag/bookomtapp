import React from 'react'
import Image from 'next/image'


const page = () => {
  return (
    <div className="container mx-auto my-8 flex flex-col md:flex-row items-center bg-slate-200">
      <div className="md:w-1/2 mb-4 md:mb-0 bg-slate-200 p-6">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">Sobre Mí</h1>
        <p className="text-lg text-gray-700 mb-4">
          ¡Hola! Soy Marcelo, un apasionado desarrollador web con experiencia en la creación de aplicaciones web atractivas y funcionales.
          Mi objetivo es combinar la creatividad y la tecnología para proporcionar soluciones web de alta calidad.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          He trabajado en una variedad de proyectos, desde landing pages hasta aplicaciones web complejas. Utilizo tecnologías modernas como React.js,
          Next.js y otras herramientas para garantizar un desarrollo eficiente y escalable.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Además del desarrollo web, me apasiona aprender nuevas tecnologías, resolver problemas y contribuir a la comunidad de desarrollo.
          Estoy siempre abierto a nuevos desafíos y oportunidades emocionantes.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Si estás buscando un desarrollador comprometido y apasionado, ¡estaré encantado de trabajar contigo en tu próximo proyecto!
        </p>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/images/hero.jpg"
          alt="Descripción de la imagen"
          className="w-full h-auto rounded-md"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default page