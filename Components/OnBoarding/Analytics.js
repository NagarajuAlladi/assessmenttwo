import React from "react";
import { Paper, Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function Analytics() {
  return (
    <div>
      
          <Paper
            style={{
              width: "250px",
              height: "250px",
              display: "flex",
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckCircleOutlineIcon style={{ color: "green" }} />
            <Typography variant="h5">Cooling/Heating</Typography>
            <Typography variant="p">Documentation</Typography>
          </Paper>
        
    </div>
  );
}

export default Analytics;
