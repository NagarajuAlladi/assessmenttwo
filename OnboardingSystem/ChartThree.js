import React from "react";
import { Grid } from "@material-ui/core";
import Chart from "react-apexcharts";

function ChartThree() {
  const options = {
    series: [75],
    labels: ["Applications"],
    colors: ["#333333"],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "75%",
          labels: {
            show: true,
            // name: {
            //   show: true,
            //   fontSize: "10px",
            //   fontFamily: "Helvetica, Arial, sans-serif",
            //   fontWeight: 100,
            //   colors: ["#F44325", "#E91E25", "#9C77B0"],
            //   offsetY: -10,
            //   formatter: function (val) {
            //     return val;
            //   },
            // },
            // value: {
            //   show: true,
            //   fontSize: "22px",
            //   fontFamily: "Helvetica, Arial, sans-serif",
            //   fontWeight: 600,
            //   color: undefined,
            //   offsetY: 16,
            //   formatter: function (val) {
            //     return val;
            //   },
            // },
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
  };
  const series = [50];
  return (
    <div>
      
        <Grid>
        <Chart
          options={options}
          series={series}
          type="donut"
          width={350}
          height={250}
        />
        </Grid>
        
      
    </div>
  );
}

export default ChartThree;
