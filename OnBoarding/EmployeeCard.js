import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import CardActions from "@material-ui/core/CardActions";

const styles = (theme) => ({
  card: {
    width: 250,
  },
  actions: {
    display: "flex",
  },
  expand: {
    marginLeft: "auto",
  },
 menuItem:{
  backgroundColor:'rgb(203,205,217)'
 },
});

class EmployeeCard extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon onClick={this.handleClick} />
            </IconButton>
          }
          title="Cooling/Heating Supply"
        />
        <Menu className={classes.dropdown}
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem className={classes.menuItem} onClick={this.handleClose}><small>Add New</small></MenuItem>
          <MenuItem className={classes.menuItem} onClick={this.handleClose}><small>Edit</small></MenuItem>
          <MenuItem className={classes.menuItem} onClick={this.handleClose}><small>Delete</small></MenuItem>
        </Menu>
        <CardContent>
          <Typography component="p" variant='caption'>
            <ul style={{paddingLeft:'10px'}}>
            <li>OAHU Temperature Reset</li>
            <li>Condenser Water Supply Temeperature Reset</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <AvatarGroup max={3} className={classes.expand}>
            <Avatar
              variant="rounded"
              style={{ borderBottomLeftRadius: "10px" }}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            />
            <Avatar
              variant="rounded"
              style={{ borderBottomLeftRadius: "10px" }}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            />
            <Avatar
              variant="rounded"
              style={{ borderBottomLeftRadius: "10px" }}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            />
          </AvatarGroup>
        </CardActions>
      </Card>
    );
  }
}

EmployeeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployeeCard);
