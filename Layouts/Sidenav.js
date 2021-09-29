import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import RoomServiceOutlinedIcon from "@material-ui/icons/RoomServiceOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import styles from '../styles/Layouts/Sidenav.module.css'

const useStyles = makeStyles((theme) => ({
  listItemText: {
    fontSize: "0.7rem",
    color: "white",
  },
}));

function Sidenav() {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  return (
    <div className={styles.outerDiv}>
      <List className={styles.list}>
        <ListItemIcon>
          <img
            src="/bildemp.svg"
            className={styles.bildempImage}
            width="45"
            height="40"
            style={{
              margin: "auto",
              marginLeft: "20px",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          />
        </ListItemIcon>
        <ListItem button key="home">
          <LocalMallOutlinedIcon
            style={{ color: "white", fontSize: "0.9rem" }}
          />
          <ListItemText
            primary="&nbsp;&nbsp;OpenSeats"
            classes={{ primary: classes.listItemText }}
            className={styles.textItem}
          />
        </ListItem>
        <ListItem button key="Notification">
          <ModeCommentOutlinedIcon
            style={{ color: "white", fontSize: "0.9rem" }}
          />
          <ListItemText
            primary="&nbsp;&nbsp;Table Talk"
            classes={{ primary: classes.listItemText }}
            className={styles.textItem}
          />
        </ListItem>
        <ListItem button key="company">
          <BusinessOutlinedIcon
            style={{ color: "white", fontSize: "0.9rem" }}
          />
          <ListItemText
            primary="&nbsp;&nbsp;Company"
            classes={{ primary: classes.listItemText }}
            className={styles.textItem}
          />
        </ListItem>
        <ListItem button key="messages">
          <MailOutlineOutlinedIcon
            style={{ color: "white", fontSize: "0.9rem" }}
          />
          <ListItemText
            primary="&nbsp;&nbsp;Messages"
            classes={{ primary: classes.listItemText }}
            className={styles.textItem}
          />
        </ListItem>
        <ListItem button key="Team">
          <GroupOutlinedIcon style={{ color: "white", fontSize: "0.9rem" }} />
          <ListItemText
            primary="&nbsp;&nbsp;Team"
            classes={{ primary: classes.listItemText }}
            className={styles.textItem}
          />
        </ListItem>
        <ListItem button key="Notifications">
          <NotificationsNoneOutlinedIcon
            style={{ color: "white", fontSize: "0.9rem" }}
          />
          <ListItemText
            primary="&nbsp;&nbsp;Notifications"
            classes={{ primary: classes.listItemText }}
            className={styles.textItem}
          />
        </ListItem>
        <ListItem button key="Refferals">
          <ThumbUpAltOutlinedIcon
            style={{ color: "white", fontSize: "0.9rem" }}
          />
          <ListItemText
            primary="&nbsp;&nbsp;Refferals"
            classes={{ primary: classes.listItemText }}
            className={styles.textItem}
          />
        </ListItem>
        <ListItem button key="liverooms">
          <RoomServiceOutlinedIcon
            style={{ color: "white", fontSize: "0.9rem" }}
          />
          <ListItemText
            primary="&nbsp;&nbsp;LiveRooms"
            classes={{ primary: classes.listItemText }}
            className={styles.textItem}
          />
        </ListItem>
        <ListItem style={{ marginTop: "90px" }} button key="settings">
          <SettingsOutlinedIcon
            style={{ color: "white", fontSize: "0.9rem" }}
          />
          <ListItemText
            primary="&nbsp;&nbsp;Settings"
            classes={{ primary: classes.listItemText }}
            className={styles.textItem}
          />
        </ListItem>
        <ListItem button key="Help">
          <HelpOutlineOutlinedIcon
            style={{ color: "white", fontSize: "0.9rem" }}
          />
          <ListItemText
            primary="&nbsp;&nbsp;Help"
            classes={{ primary: classes.listItemText }}
            className={styles.textItem}
          />
        </ListItem>

        <ListItem button key="Avatar" className={styles.textItem}>
          <ListItemAvatar className={styles.textItem}>
            <Avatar
              style={{ width: "30px", height: "30px" }}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Dinesh"
            secondary="Admin"
            className={styles.textItem}
            classes={{
              primary: classes.listItemText,
              secondary: classes.listItemText,
            }}
          />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidenav;
