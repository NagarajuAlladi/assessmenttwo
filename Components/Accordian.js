import React from "react";
import styles from '../styles/Accordian.module.css'


import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Accordion, AccordionSummary, Grid, Typography } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import StarOutlineIcon from '@material-ui/icons/StarOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Group Engineering Manager", '12/12/2021', '12/12/2021', '24Candidates', <button className={styles.button}>Interview Rounds</button>),
  createData("Front-End Developer", '12/12/2021', '12/12/2021', '52Candidates', <button className={styles.button}>Interview Rounds</button>),
  createData("Seniour Ruby Developer", '12/12/2021', '12/12/2021', '35Candidates', <button className={styles.button}>Boost Seat</button>),
  createData("QA Manager",  '12/12/2021', '12/12/2021', '22Candidates', <button className={styles.button}>Interview Rounds</button>),
//   createData("Gingerbread", 356, 16.0, 49, 3.9)
];

class Accordian extends React.Component {
  state = {
    open: true
  };

  handleClick = () => {
    this.setState((state) => ({ open: !state.open }));
  };

  // const [activeRow,setActiveRow]=useState(null);

  render() {
    return (
      <div  className={styles.outerDiv}>
      
        <Accordion>
          <AccordionSummary
            expandIcon={this.state.open ? 
            <Button  variant='outlined' size='small'><ExpandLess style={{opacity:'0.3'}}/></Button> 
            : <Button variant='outlined' size='small'><ExpandMore style={{opacity:'0.3'}}/></Button>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={this.handleClick}
          >

            <Grid container justifyContent='space-between'>  
            <Grid item>
            <Typography><b>Engineering&nbsp;&nbsp;</b><small style={{color:'rgb(58,112,209)'}}>4seats</small></Typography>
            </Grid>
            <Grid item style={{display:'flex',alignItems:'center'}}>
            <MoreHorizIcon/>
            <Button style={{marginLeft:'15px'}} variant='text' color='primary' variant='outlined' size='small'>
              <Typography variant='Button'>+Open Seat</Typography>
            </Button>
            </Grid>
            </Grid>
          </AccordionSummary>
        
        </Accordion>

        {this.state.open && (
          <TableContainer component={Paper} >
            <Table style={{ minWidth: "650" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell  style={{fontSize:'13px'}}><small>SEAT TITLE</small></TableCell>
                  <TableCell align="right"  style={{fontSize:'13px'}}><small>DATE POSTED</small></TableCell>
                  <TableCell align="right"  style={{fontSize:'13px'}}><small>EXPIRATION DATE</small></TableCell>
                  <TableCell align="right"  style={{fontSize:'13px'}} ><small>CANDIDATES</small></TableCell>
                  <TableCell align="right"  style={{fontSize:'13px'}}><small>STATUS</small></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} >
                    {/* onClick={()=>setActiveRow(row.name)} */}
                    <TableCell component="th" scope="row">
                      <FormControlLabel
                        value="title"
                        control={<StarOutlineIcon  fontSize='small'/>}
                        // color={row.name===activeRow && 'primary'}
                        label={row.name}
                      />
                    </TableCell>
                    <TableCell align="right" style={{fontSize:'0.8rem'}}>{row.calories}</TableCell>
                    <TableCell align="right"  style={{fontSize:'0.8rem'}}>{row.fat}</TableCell>
                    <TableCell align="right"  style={{fontSize:'0.8rem'}}>{row.carbs}</TableCell>
                    <TableCell align="right"  style={{fontSize:'0.8rem'}}>{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    );
  }
}

export default Accordian;
