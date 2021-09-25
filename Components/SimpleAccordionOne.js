import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from '../styles/SimpleAccordion.module.css'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { List,ListItem,ListItemIcon,ListItemText } from "@material-ui/core";
import {InboxIcon} from "@material-ui/icons"


export default function SimpleAccordionOne() {
  return (
    <div className={styles.root} style={{marginTop:'20px'}}>
      <Accordion>
      <Paper elevation={3} >
     
      <AccordionSummary expandIcon={<ExpandMoreIcon />} className={styles.summary}>
        <div>
          <p>Design&nbsp;&nbsp;<small>3seats</small></p>
        </div>
        <div className={styles.insideSummary}>
           <MoreHorizIcon/>
           <button style={{marginLeft:'15px'}}>+ OpenSeat</button>
        </div>
      </AccordionSummary>
      </Paper>

      {/* <AccordionDetails  className={styles.mainDiv}>
      

<List style={{display:'flex',justifyContent:'space-evenly'}}>
        <ListItem>  
        <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem>
            <ListItemText primary="Actions" />  
        </ListItem>
        <ListItem>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem>
            <ListItemText primary="Dashboard" />
       </ListItem>
 </List>
        </AccordionDetails> */}

      
       

        {/* <Paper elevation={3} >
        <AccordionDetails  className={styles.mainDiv}>
        <div className={styles.subDiv}>
        <FormControlLabel value="end" control={<Radio color="primary" />} label="Group Engineering Manager" />
        </div>
        <div className={styles.subDiv}>
        <p>12/12/2021</p>
        </div>
        <div className={styles.subDiv}>
        <p>12/12/2021</p>
        </div>
        <div className={styles.subDiv}>
        <p>24Candidates</p>
        </div>
        <div className={styles.subDiv}>
        <p>Interview Rounds</p>
        </div>
    </AccordionDetails>
    </Paper>

    <Paper elevation={3} >
    <AccordionDetails  className={styles.mainDiv}>
        <div className={styles.subDiv}>
        <FormControlLabel value="end" control={<Radio color="primary" />} label="Group Engineering Manager" />
        </div>
        <div className={styles.subDiv}>
        <p>12/12/2021</p>
        </div>
        <div className={styles.subDiv}>
        <p>12/12/2021</p>
        </div>
        <div className={styles.subDiv}>
        <p>24Candidates</p>
        </div>
        <div className={styles.subDiv}>
        <p>Interview Rounds</p>
        </div>
    </AccordionDetails>
    </Paper>  */}

    <Paper elevation={3}>
    <AccordionDetails  className={styles.mainDiv}>
        
        <FormControlLabel value="end" control={<Radio color="primary" />} label="Group Engineering Manager" />
        {/* <div className={styles.radioDiv}>
        <input type="radio" className={styles.radioButton} value="HTML"/>
        <label for="html">HTML</label>
        </div> */}
        
        <p>12/12/2021</p>
        
       
        <p>12/12/2021</p>
        
        
        <p>24Candidates</p>
        
        <p>Interview Rounds</p>
       </AccordionDetails>
    </Paper>
      </Accordion>
    </div>
  );
}
