export const numberParser = (price) => {
  return Math.round(Number(price.replace(',', '.').split(' ')[1]) * 100) / 100;
};
