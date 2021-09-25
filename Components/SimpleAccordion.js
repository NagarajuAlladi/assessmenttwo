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


export default function SimpleAccordion() {
  return (
    <div className={styles.root}>
      <Accordion>
      <Paper elevation={3} >
     
      <AccordionSummary expandIcon={<ExpandMoreIcon />} className={styles.summary}>
        <div>
          <Typography>Engineering &nbsp;&nbsp;<small>4seats</small></Typography>
        </div>
        <div className={styles.insideSummary}>
           <MoreHorizIcon/>
           <button style={{marginLeft:'15px'}}>+ OpenSeat</button>
        </div>
      </AccordionSummary>
      </Paper>

      <AccordionDetails  className={styles.mainDiv}>
        
            <div className={styles.subDiv}>
            <Typography>SEAT TITLE</Typography>
            </div>
            <div className={styles.subDiv}>
            <Typography>DATE POSTED</Typography>
            </div>
            <div className={styles.subDiv}>
            <Typography>EXPIRATION DATE</Typography>
            </div>
            <div className={styles.subDiv}>
            <Typography>CANDIDATES</Typography>
            </div>
            <div className={styles.subDiv}>
            <Typography>STATUS</Typography>
            </div>

        </AccordionDetails>

      
        <Paper elevation={3} >
        <AccordionDetails  className={styles.mainDiv}>
        
            <div className={styles.subDiv}>
            <FormControlLabel value="end" control={<Radio color="primary" />} label="Group Engineering Manager" />
            </div>
            <div className={styles.subDiv}>
            <Typography>12/12/2021</Typography>
            </div>
            <div className={styles.subDiv}>
            <Typography>12/12/2021</Typography>
            </div>
            <div className={styles.subDiv}>
            <Typography>24Candidates</Typography>
            </div>
            <div className={styles.subDiv}>
            <Typography>Interview Rounds</Typography>
            </div>

        </AccordionDetails>
        </Paper>

        <Paper elevation={3} >
        <AccordionDetails  className={styles.mainDiv}>
        <div className={styles.subDiv}>
        <FormControlLabel value="end" control={<Radio color="primary" />} label="Front-end Engineer" />
        </div>
        <div className={styles.subDiv}>
        <Typography>12/12/2021</Typography>
        </div>
        <div className={styles.subDiv}>
        <Typography>12/12/2021</Typography>
        </div>
        <div className={styles.subDiv}>
        <Typography>24Candidates</Typography>
        </div>
        <div className={styles.subDiv}>
        <Typography>Interview Rounds</Typography>
        </div>
    </AccordionDetails>
    </Paper>

    <Paper elevation={3} >
    <AccordionDetails  className={styles.mainDiv}>
        <div className={styles.subDiv}>
        <FormControlLabel value="end" control={<Radio color="primary" />} label="Seniour Ruby Developer" />
        </div>
        <div className={styles.subDiv}>
        <Typography>12/12/2021</Typography>
        </div>
        <div className={styles.subDiv}>
        <Typography>12/12/2021</Typography>
        </div>
        <div className={styles.subDiv}>
        <Typography>24Candidates</Typography>
        </div>
        <div className={styles.subDiv}>
        <Typography>Interview Rounds</Typography>
        </div>
    </AccordionDetails>
    </Paper>

    <Paper elevation={3}>
    <AccordionDetails  className={styles.mainDiv}>
        <div className={styles.subDiv}>
        <FormControlLabel value="end" control={<Radio color="primary" />} label="QA Manager" />
        </div>
        <div className={styles.subDiv}>
        <Typography>12/12/2021</Typography>
        </div>
        <div className={styles.subDiv}>
        <Typography>12/12/2021</Typography>
        </div>
        <div className={styles.subDiv}>
        <Typography>24Candidates</Typography>
        </div>
        <div className={styles.subDiv}>
        <Typography>Interview Rounds</Typography>
        </div>
    </AccordionDetails>
    </Paper>
      </Accordion>
    </div>
  );
}
