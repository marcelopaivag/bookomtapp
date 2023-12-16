import React from 'react';

const ProjectList = ({ projects }) => {
    return (
        <>
        <h1 className="text-center text-3xl font-bold mb-6 mt-4">Mis Proyectos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 p-5">
            {projects.map(project => (
                <div key={project.id} className="bg-white p-6 rounded-md shadow-md text-gray-600">
                    <img src={project.image} alt={project.title} className="mb-4 rounded-md" />
                    <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                    <a
                        href={`projects/${project.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >Ver más
                    </a>
                </div>
            )
            )
            }
        </div>
        </>
    );
};

export default ProjectList;
