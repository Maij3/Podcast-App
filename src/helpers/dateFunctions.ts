import {
  format,
  formatDistanceToNow,
} from "date-fns";

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
    const second = parseFloat(date);
    //const second = milliseconds / 1000;
    /*   const duration = intervalToDuration({
    start: 0,
    end: second * 1000,
  }); */
    const minutes = format(second, "m");
    const seconds = format(second, "ss");
    const formatted = `${minutes}:${seconds}`;
    return formatted;
  } catch (error) {
    console.log(error);
  }
};
