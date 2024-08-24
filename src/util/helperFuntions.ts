export const convertPrice = (price: number): string => {
  const dollar = price / 100;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(dollar);
};
