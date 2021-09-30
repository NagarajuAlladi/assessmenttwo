import { Button, Typography } from "@material-ui/core";
import React from "react";
import styles from "../styles/Dashboard/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h2>OpenSeats</h2>
      </div>
      <div className={styles.rightContainer}>
        <Button
          variant="contained"
          variant="text"
          size="small"
          style={{
            color: "rgb(58,112,209)",
            padding: "0.62rem 0.62rem",
            border: " 0.001rem solid rgb(194, 190, 190)",
          }}
        >
          <Typography variant="caption">Job Drafts</Typography>
        </Button>

        <Button
          variant="contained"
          variant="text"
          size="small"
          style={{
            marginLeft: "0.62rem",
            padding: "0.62rem 0.62rem",
            color: "white",
            backgroundColor: "rgb(58,112,209)",
          }}
        >
          <Typography variant="caption"> +New Department</Typography>
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
