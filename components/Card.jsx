"use client"

import React from 'react';
import projects from '@/public/projectsJs';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const Card = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id, 10));

  if (!project) {
    return <div>No se encontró el proyecto</div>;
  }

  return (
    <div className="max-w-lg md:max-w-xl lg:max-w-full mx-auto bg-white shadow-md overflow-hidden text-slate-800">
      <img src={project.image} className="w-full h-120 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{project.title}</h2>
        <h2 className="text-base font-bold mb-2">{project.description}</h2>
        <Link href={project.siteLink}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={project.siteLink}
          >
            Ver sitio web
          </button>

        </Link>
        <Link href={project.githubLink}>
          <button
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Ver repositorio github
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Card;