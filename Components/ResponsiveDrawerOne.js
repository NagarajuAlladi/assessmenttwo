import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText"
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";


import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import styles from '../styles/ResponsiveDrawerOne.module.css'

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },

toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function ResponsiveDrawerOne(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={styles.outerDiv}>
      <div className={classes.toolbar}  />
      <List className={styles.list}>
        <ListItem button key="home" className={styles.listItem} >
          <ListItemIcon>
            <LocalMallOutlinedIcon style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText primary="OpenSeats" />
        </ListItem>
        <ListItem button key="Notification">
          <ListItemIcon>
            <ModeCommentOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Table Talk" />
        </ListItem>
        <ListItem button key="company">
          <ListItemIcon>
            <BusinessOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Company" />
        </ListItem>
        <ListItem button key="messages">
          <ListItemIcon>
            <MailOutlineOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button key="Team">
          <ListItemIcon>
            <GroupOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Team" />
        </ListItem>
        <ListItem button key="Notifications" >
          <ListItemIcon>
            < NotificationsNoneOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button key="Refferals">
          <ListItemIcon>
            < ThumbUpAltOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Refferals" />
        </ListItem>
        <ListItem button key="liverooms">
          <ListItemIcon>
            < RoomServiceOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="LiveRooms" />
        </ListItem>
        <ListItem button key="settings" >
          <ListItemIcon>
            < SettingsOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button key="Help">
          <ListItemIcon>
            < HelpOutlineOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>


        <ListItem button key="Avatar">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
          </ListItemAvatar>
          <ListItemText primary="Dinesh" secondary="Admin" />
          {/* <ListItemText primary="Admin"/> */}
        </ListItem>
      </List>
    </div>
  );

const container =
    window !== undefined ? () => window().document.body : undefined;

return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{backgroundColor:'rgb(58,112,209)'}}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Bildemp
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}