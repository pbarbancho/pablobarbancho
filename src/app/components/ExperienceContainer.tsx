import React from 'react';

export const ExperienceContainer = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div className="relative">
      {/* Línea central */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>
      
      <div className="space-y-12">
        {children.map((child: any, index: number) => {
          const isEven = index % 2 === 1; // Para la segunda tarjeta, cuarta, etc.
          return (
            <div key={index} className="relative flex items-center">
              {/* Círculo central */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-foreground rounded-full h-4 w-4 z-10"></div>
              
              {/* Línea conectando el círculo anterior */}
              {index !== 0 && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 border-l-2 border-gray-300"></div>
              )}
              
              {/* Tarjeta a la izquierda o derecha */}
              <div className={`w-5/12 ${isEven ? 'ml-auto' : 'mr-auto'}`}>
                {child}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};