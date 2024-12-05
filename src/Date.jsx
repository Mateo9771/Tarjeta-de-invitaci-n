const events = {
    ceremonia: {
      fecha: "Sabado 22 de Marzo del 2025",
      direccion: "C. 604 400, B1914 Villa Elvira, Provincia de Buenos Aires",
      hora: "18:00",
      dataTime: "2025-03-22T18:00:00",
      localizacion: "",
    },
    fiesta: {
      fecha: "Sabado 22 de Marzo del 2025",
      direccion: "C. 604 400, B1914 Villa Elvira, Provincia de Buenos Aires",
      hora: "20:00",
      dataTime: "2025-03-22T18:00:00",
      localizacion: "",
    },
  };
  
  export const getEventDetails = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(events);
      }, 500);
    });
  };

  /*El blanco está reservado para la novia, ¡esperamos que elijan sus mejores colores para acompañarnos en este día tan especial! */