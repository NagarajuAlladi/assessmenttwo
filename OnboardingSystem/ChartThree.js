import React from "react";
import { Grid } from "@material-ui/core";
import Chart from "react-apexcharts";

function ChartThree() {
  const options = {
    series: [50],
    colors: ["#333333"],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: false,
              label: "Total",
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: "#373d3f",
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },

    title: {
      text: "View/Apply Ratio",
      align: "center",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#263238",
      },
    },
    dataLabels: {
      enabled: false,
    },
  };
  const series = [50];
  return (
    <div>
      
        <Chart
          options={options}
          series={series}
          type="donut"
          width={350}
          height={250}
        />
      
    </div>
  );
}

export default ChartThree;
