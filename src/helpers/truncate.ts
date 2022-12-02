/*
 * Функция обрезает текст на нужную длину и подсталяет три точки в конец.
 **/

export const truncate = (text: string, count: number): string => {
  return text?.length > count ? `${text.slice(0, count)}...` : text;
};
