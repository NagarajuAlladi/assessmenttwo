import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



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
import MenuIcon from '@material-ui/icons/Menu';

import styles from '../styles/ResponsiveDrawerOne.module.css'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    left: false,
   
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className={styles.outerDiv}>
      <div className={classes.toolbar}  />
      <List className={styles.list}>
          <ListItemIcon>
          <img
            src='/bildemp.svg'
            className={styles.bildempImage}
            width='50'
            height='45'
            style={{marginLeft:'20px',marginTop:'10px',marginBottom:'20px'}}
          />
          </ListItemIcon>
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

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
