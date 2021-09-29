import { Button, Typography } from "@material-ui/core";
import React from "react";
import styles from "../styles/Dashboard/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.outerDiv}>
      <div className={styles.leftDiv}>
        <h2>OpenSeats</h2>
      </div>
      <div className={styles.rightDiv}>
        <Button
          variant="contained"
          variant="text"
          size="small"
          style={{
            color: "rgb(58,112,209)",
            padding: "10px 10px",
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
            marginLeft: "10px",
            padding: "10px 10px",
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
