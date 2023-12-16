import React from 'react';

const Jumbotron = ({ title, description, backgroundImage }) => {
  return (
    <div
      className="bg-cover bg-center h-96 flex items-center justify-center text-slate-900 bg-slate-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a OMT FullStack Development</h1>
        <p className="text-lg">Tu socio en el desarrollo web. Transformamos ideas en soluciones digitales innovadoras.</p>
      </div>
    </div>
  );
};

export default Jumbotron;
