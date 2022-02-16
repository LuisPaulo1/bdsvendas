import { SalesByGender } from "./types";

export const buildSalesByStoreChart = (sales: SalesByGender[]) => {
  const labels = sales.map((sale) => sale.gender);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series,
  };
};

export const formatGender = (indice: number) => {
  const textByGender = ["Masculino", "Feminino", "Outros"];
  return textByGender[indice];
};
