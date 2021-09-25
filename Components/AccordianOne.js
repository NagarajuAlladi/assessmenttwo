import React from "react";
import styles from '../styles/Accordian.module.css'


import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Accordion, AccordionSummary, Typography } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import StarOutlineIcon from '@material-ui/icons/StarOutline';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Brand Designer,Web", '12/12/2021', '12/12/2021', '24Candidates', <button className={styles.button}>Interview Rounds</button>),
  createData("Seniour Product Manager", '12/12/2021', '12/12/2021', '52Candidates', <button className={styles.button}>Interview Rounds</button>),
  createData("Seniour UI Designer", '12/12/2021', '12/12/2021', '35Candidates', <button className={styles.button}>Boost Seat</button>),
  // createData("QA Manager",  '12/12/2021', '12/12/2021', '22Candidates', <button className={styles.button}>Interview Rounds</button>),
//   createData("Gingerbread", 356, 16.0, 49, 3.9)
];

class Accordian extends React.Component {
  state = {
    open: true
  };

  handleClick = () => {
    this.setState((state) => ({ open: !state.open }));
  };

  render() {
    return (
      <div  className={styles.outerDiv}>
        <Accordion>
          <AccordionSummary
            expandIcon={this.state.open ?<button><ExpandLess /></button> : <button><ExpandMore /></button>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={this.handleClick}
          >
            <Typography>Design&nbsp;&nbsp;<small style={{color:'rgb(58,112,209)'}}>3seats</small></Typography>
            <MoreHorizIcon/>
            <button className={styles.openseatButton}>+Open Seat</button>
          </AccordionSummary>
        </Accordion>

        {this.state.open && (
          <TableContainer component={Paper} >
            <Table style={{ minWidth: "650" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><small>SEAT TITLE</small></TableCell>
                  <TableCell align="right"><small>DATE POSTED</small></TableCell>
                  <TableCell align="right"><small>EXPIRATION DATE</small></TableCell>
                  <TableCell align="right"><small>CANDIDATES</small></TableCell>
                  <TableCell align="right"><small>STATUS</small></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <FormControlLabel
                        value="title"
                        control={<StarOutlineIcon/>}
                        label={row.name}
                      />
                      {/* <StarOutlineIcon/> */}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
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
