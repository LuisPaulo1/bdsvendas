import { useEffect, useMemo, useState } from "react";
import { FilterData, SalesByGender } from "../../types";
import { sumSalesByStore } from "./helpers";
import { buildFilterParams, makeRequest } from "../../utils/request";
import { formatPrice } from "../../utils/formatters";

import "./styles.css";

type Props = {
  filterData?: FilterData;
};
function SalesByStoreComponent({ filterData }: Props) {
  const [totalSum, setTotalSum] = useState(0);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>("sales/by-gender", { params })
      .then((response) => {
        const newTotalSum = sumSalesByStore(response.data);
        setTotalSum(newTotalSum);
      })
      .catch(() => {
        console.error("Error to fetch sales by gender");
      });
  }, [params]);

  return (
    <div className="sales-by-gender-container">
      <div className="sales-by-gender-quantity-container">
        <h2 className="sales-by-gender-quantity">{formatPrice(totalSum)}</h2>
        <span className="sales-by-gender-quantity-label">Total de Vendas</span>
      </div>
    </div>
  );
}

export default SalesByStoreComponent;
