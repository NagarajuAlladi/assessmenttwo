import React from "react";
import { Card, Grid } from "@material-ui/core";
import Chart from "react-apexcharts";

function ChartTwo() {
  const options = {
    series: [30],
    // labels: ["Applications"],
    colors: ["#287452"],
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
      text: "Viewed more than 1 minute",
      align: "center",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#263238",
      },
    },
    dataLabels: {
      enabled: false,
    },
  };
  const series = [30];
  return (
    <div>
      
       <Card>
       <Chart
          options={options}
          series={series}
          type="donut"
          width={350}
          height={250}
        />
       </Card>
      
    </div>
  );
}

export default ChartTwo;
