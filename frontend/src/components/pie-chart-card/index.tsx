import { formatGender } from "helpers";
import ReactApexChart from "react-apexcharts";
import { buildPieChartConfig } from "./helpers";

import "./styles.css";

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

function PieChartCard({ labels = [], name, series = [] }: Props) {
  const newLabels = labels.map((genero, indice) => {
    return formatGender(indice);
  });

  return (
    <div className="pie-chart-card">
      <ReactApexChart
        options={buildPieChartConfig(newLabels, name)}
        type="donut"
        width="350"
        height="350"
        series={series}
      />
    </div>
  );
}

export default PieChartCard;
