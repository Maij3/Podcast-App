import { format, formatDistanceToNow } from "date-fns";

export const getFormatDistanceToNow = (date: number | undefined | Date) => {
  if (date) {
    const fromNow = formatDistanceToNow(date);
    return `hace ${fromNow}`;
  } else {
    return "";
  }
};
export const getFormat = (date: number | undefined | Date) => {
  if (date) {
    const fromNow = format(date, "MM/dd/yyyy");
    return ` ${fromNow}`;
  } else {
    return "";
  }
};

export const getFormatMinutes = (date: string) => {
  try {
    const milliseconds = parseFloat(date);
    const minutos = Math.floor(milliseconds / 60000);
    const minutosFormateados = format(new Date().setMinutes(minutos), "m:ss"); // Formatear minutos en formato de canción
    return minutosFormateados;
  } catch (error) {
    console.log(error);
  }
};

/* export function milisegundosAMinutosCancion(milisegundos:any) {
  milisegundos = parseFloat(milisegundos)
  const minutos = Math.floor(milisegundos / 60000); // Convertir milisegundos a minutos

  const minutosFormateados = format(new Date().setMinutes(minutos), 'm:ss'); // Formatear minutos en formato de canción

  return minutosFormateados;
} */
