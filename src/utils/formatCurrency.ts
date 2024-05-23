export const formatCurrency = (number: number): string => {
  console.log(
    number,
    number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  );

  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
