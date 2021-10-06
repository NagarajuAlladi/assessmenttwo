import React from "react";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid, Typography } from "@material-ui/core";
import styles from "../../styles/onboarding/SubnavOnboard.module.css";

function Subnav() {
  return (
    <div className={styles.container}>
      <Grid container direction="row">
        <Grid item xs={12} sm={4} md={4} lg={4} className={styles.containerOne}>
          <Grid style={{ margin: "23px 0" }}>
            <FolderOpenIcon color="primary" />
          </Grid>
          <Grid>
            <Typography variant="caption" style={{ color: "white" }}>
              &nbsp;West Oak/
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="caption" color="primary">
              Building1
            </Typography>
          </Grid>
          <Grid>
            <ExpandMoreIcon
              style={{ color: "white", marginTop: "6px" }}
              fontSize="small"
            />
          </Grid>
        </Grid>
        <Grid xs={12} sm={4} md={4} lg={4} item  className={styles.containerTwo}>
          <Typography
            variant="caption"
            style={{ color: "white", padding: "23px 30px" }}
          >
            Plans&Documents
          </Typography>
          <Typography
            variant="caption"
            style={{ color: "white", padding: "23px 30px" }}
          >
            <small>duein5days</small>
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={4}
          md={4}
          lg={4}
          item
          className={styles.containerThree}
        >
          <Typography
            variant="caption"
            style={{ color: "white", opacity: "0.5", padding: "23px 30px" }}
          >
            Analytics
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Subnav;
