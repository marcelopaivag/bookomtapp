import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen flex items-end justify-center">
            <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center z-[-1] filter brightness-75">
            </div>

            <div className="text-center text-white z-10 p-8 absolute bottom-0 left-0 right-0">
                <h1 className="text-4xl font-bold mb-4">Marcelo Paiva Gómez</h1>
                <p className="text-lg">Desarrollo Full-Stack.</p>
            </div>
        </div>
    );
};

export default Hero;
