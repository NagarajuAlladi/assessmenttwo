import React,{useState} from "react";
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







import styles from '../styles/Sidenav.module.css'


function Sidenav() {
  const [open,setOpen]=useState(true);
    return (
      <div className={styles.totalDiv}>
     <div className={styles.outerDiv}>
     
      <List className={styles.list}>
          <ListItemIcon>
          <img
            src='/bildemp.svg'
            className={styles.bildempImage}
            width='45'
            height='40'
            style={{margin:'auto'}}
            // style={{marginLeft:'20px',marginTop:'10px',marginBottom:'20px'}}
          />
          </ListItemIcon>
        <ListItem button key="home" className={styles.listItem} >
          <ListItemIcon title='OpenSeats'>
            <LocalMallOutlinedIcon style={{color:'white'}} />
          </ListItemIcon>
          <ListItemText primary="OpenSeats"  className={styles.textItem}/>
        </ListItem>
        <ListItem button key="Notification">
          <ListItemIcon title='Table Talk'>
            <ModeCommentOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Table Talk"  className={styles.textItem} />
        </ListItem>
        <ListItem button key="company">
          <ListItemIcon title='Company'>
            <BusinessOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Company"  className={styles.textItem} />
        </ListItem>
        <ListItem button key="messages">
          <ListItemIcon title='Messages'>
            <MailOutlineOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Messages"  className={styles.textItem} />
        </ListItem>
        <ListItem button key="Team">
          <ListItemIcon title='Team'>
            <GroupOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Team"  className={styles.textItem} />
        </ListItem>
        <ListItem button key="Notifications" >
          <ListItemIcon title='Notifications'>
            < NotificationsNoneOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Notifications"  className={styles.textItem}/>
        </ListItem>
        <ListItem button key="Refferals">
          <ListItemIcon title='Refferals'>
            < ThumbUpAltOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Refferals"  className={styles.textItem}/>
        </ListItem>
        <ListItem button key="liverooms">
          <ListItemIcon title='LiveRooms'>
            < RoomServiceOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="LiveRooms"  className={styles.textItem}/>
        </ListItem>
        <ListItem button key="settings" >
          <ListItemIcon title='Settings'>
            < SettingsOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Settings"  className={styles.textItem} />
        </ListItem>
        <ListItem button key="Help">
          <ListItemIcon title='Help'>
            < HelpOutlineOutlinedIcon style={{color:'white'}}/>
          </ListItemIcon>
          <ListItemText primary="Help"  className={styles.textItem} />
        </ListItem>


        <ListItem button key="Avatar">
          <ListItemAvatar className={styles.textItem}>
            <Avatar  alt="Remy Sharp" src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
          </ListItemAvatar>
          <ListItemText primary="Dinesh" secondary="Admin"  className={styles.textItem} />
          {/* <ListItemText primary="Admin"/> */}
        </ListItem>
      </List>

      </div>
    </div>
    )
}

export default Sidenav
