// Placeholder to host a component
import React from 'react';

const Hours = () => {
  // Obtener la fecha actual
  const currentDate = new Date();
  
  // Crear un array con las horas del día (00:00 a 23:00)
  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = i < 10 ? `0${i}:00` : `${i}:00`;
    return `${hour}`;
  });

  return (
    <div>
      <h2>Horas del día ({currentDate.toLocaleDateString()}):</h2>
      <ul>
        {hours.map((hour, index) => (
          <li key={index}>{hour}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hours;
