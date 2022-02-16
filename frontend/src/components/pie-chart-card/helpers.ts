import { ApexOptions } from "apexcharts";

export const buildPieChartConfig = (labels: string[] = [], name: string) => {
  return {
    labels,
    noData: {
      text: "Sem resultados",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "#FFF",
        fontSize: "18px",
        fontFamily: "Roboto, sans-serif",
      },
    },
    legend: {
      show: true,
      floating: false,
      position: "bottom",
      offsetY: 10,
      labels: {
        colors: ["#b4bed2"],
      },
      fontFamily: "Roboto, sans-serif",
      fontSize: "18px",
      itemMargin: {
        vertical: 5,
      },
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      pie: {
        size: 400,
        donut: {
          size: "65%",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 10,
              formatter: function () {
                return name;
              },
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: "24px",
              color: "#ABB1C0",
              fontFamily: "Roboto, sans-serif",
              formatter: function () {
                return "";
              },
            },
          },
        },
      },
    },
    chart: {
      height: "400px",
    },
  } as ApexOptions;
};
