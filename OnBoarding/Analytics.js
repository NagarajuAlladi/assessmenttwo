import React from "react";
import { Paper, Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function Analytics() {
  return (
    <div>
      <Paper elevation={24} style={{ width: "250px", height: "250px" }}>
        <Paper style={{ width: "250px", height: "242px" }}>
          <Paper
            style={{
              width: "250px",
              height: "234px",
              display: "flex",
              flexDirection:'column',
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckCircleOutlineIcon style={{color:'green'}}/>
            <Typography variant="h5">Cooling/Heating</Typography>
            <Typography variant="p">Documentation</Typography>
          </Paper>
        </Paper>
      </Paper>
    </div>
  );
}

export default Analytics;
