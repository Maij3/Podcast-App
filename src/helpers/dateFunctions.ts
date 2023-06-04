import {
  addMilliseconds,
  differenceInMinutes,
  format,
  formatDistanceToNow,
  intervalToDuration,
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
  const second = parseFloat(date);
/*   const duration = intervalToDuration({
    start: 0,
    end: second * 1000,
  }); */
  const minutes= format(second, "m");
  const seconds = format(second, "ss")
  console.log({minutes , seconds})
  const formatted = `${minutes}:${seconds}`;
  return formatted;
};
