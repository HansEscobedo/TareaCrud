export const formatearFecha = fecha => {
  const nuevaFecha = new Date(fecha);
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return nuevaFecha.toLocaleDateString('es-ES', opciones);
};

export const URL = 'http://192.168.0.15:8000/api/';
