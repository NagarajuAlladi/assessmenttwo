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
import { Box } from "@material-ui/core";

const styles = (theme) => ({
  card: {
    width: 250,
    height: 250,
  },
  actions: {
    display: "flex",
  },
  expand: {
    marginLeft: "auto",
  },
  menuItem: {
    backgroundColor: "rgb(203,205,217)",
    paddingRight: "40px",
  },
});

class OnboardingCard extends React.Component {
  state = {
    anchorEl: null,
    cardColor: false,
  };

  handleClick = (event) => {
    this.setState({ ...this.state, anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ ...this.state, anchorEl: null });
  };
  handleCardColor = () => {
    this.setState({
      cardColor: !this.state.cardColor,
    });
  };

  render() {
    console.log(this.props.id);
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const { title, content, images } = this.props;
    return (
      <Card
        onClick={this.handleCardColor}
        className={classes.card}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
          backgroundColor: this.state.cardColor ? "blue" : "",
          color: this.state.cardColor ? "white" : "",
        }}
      >
        <CardHeader
          action={
            <Box ml={2}>
              <IconButton>
                <MoreVertIcon onClick={this.handleClick} />
              </IconButton>
            </Box>
          }
          title={title}
        />
        <Menu
          PaperProps={{
            style: {
              backgroundColor: "rgb(203,205,217)",
              // width: "150px",
              opacity: "1",
              paddingTop: "0px",
            },
          }}
          className={classes.dropdown}
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem
            className={classes.menuItem}
            style={{ color: "white" }}
            onClick={this.handleClose}
          >
            <small>Add New</small>
          </MenuItem>
          <MenuItem className={classes.menuItem} onClick={this.handleClose}>
            <small>Edit</small>
          </MenuItem>
          <MenuItem className={classes.menuItem} onClick={this.handleClose}>
            <small>Delete</small>
          </MenuItem>
        </Menu>
        <CardContent>
          <Typography component="p" variant="caption">
            <ul style={{ paddingLeft: "10px" }}>
              {content.map((data, i) => {
                return <li key={i}>{data}</li>;
              })}
            </ul>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <AvatarGroup max={3} className={classes.expand}>
            {images.map((image, i) => {
              return (
                <Box>
                  <Avatar
                    disableGutters={false}
                    variant="rounded"
                    style={{
                      borderBottomLeftRadius: "10px",
                      width: "1.87rem",
                      height: "1.87rem",
                    }}
                    alt="Remy Sharp"
                    src={image}
                  />
                </Box>
              );
            })}
          </AvatarGroup>
        </CardActions>
      </Card>
    );
  }
}

OnboardingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OnboardingCard);
