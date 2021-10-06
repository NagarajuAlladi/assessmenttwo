import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import styles from "../../styles/onboarding/NavbarOnboard.module.css";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#F8E944",
    padding: "3px",
    border: "2px solid rgb(24,43,49)",
  },
}))(Badge);
function NavBar() {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: "rgb(28,43,110)" }}
    >
      <Grid container justifyContent="space-between">
        <Grid
          item
          style={{
            display: "flex",
            alignItems: "center",
            width: "33.33%",
            backgroundColor: " rgb(25,33,82)",
          }}
        >
          <IconButton
            className={styles.iconButton}
            style={{
              backgroundColor: "rgb(33,51,113)",
              width: "48px",
              height: "48px",
              margin: "8px 0 8px 10px",

              color: "rgb(119,150,230)",
            }}
          >
            <Typography variant="h5" style={{fontFamily:'sans-serif'}}>b</Typography>
          </IconButton>

          <Typography
            variant="caption"
            color="primary"
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "95px",
            }}
          >
            <ArrowBackIcon style={{ color: "white" }} fontSize="small" />
            Onboarding
          </Typography>
        </Grid>
        <Grid item>
          <StyledBadge
            style={{ margin: "12px 0", paddingRight: "10px" }}
            overlap="rectangular"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            variant="dot"
          >
            <Avatar
              variant="rounded"
              style={{ borderBottomLeftRadius: "10px" }}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            />
          </StyledBadge>
        </Grid>
      </Grid>
    </div>
  );
}

export default NavBar;

{
  /* <div style={{ display: "flex" }} className={styles.leftSide}>
        <IconButton
          style={{ backgroundColor: "blue", width: "50px", height: "50px" }}
        >
          <Typography variant="h5">b</Typography>
        </IconButton>

        <Typography
          variant="caption"
          color="primary"
          style={{ display: "flex", alignItems: "center", marginLeft: "60px" }}
        >
          <ArrowBackIcon />
          Onboarding
        </Typography>
      </div>
      <div>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          variant="dot"
        >
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          />
        </StyledBadge>
      </div> */
}
