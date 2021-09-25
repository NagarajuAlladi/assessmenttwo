import React from "react";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Brand Designer,Web", '12/12/2021', '12/12/2021', '24Candidates', <button>Interview Rounds</button>),
  createData("Seniour Product Designer", '12/12/2021', '12/12/2021', '52Candidates', <button>Interview Rounds</button>),
  createData("Seniour UI Developer", '12/12/2021', '12/12/2021', '22Candidates', <button>Boost Seat</button>),
//   createData("QA Manager",  '12/12/2021', '12/12/2021', '22Candidates', <button>Interview Rounds</button>),
//   createData("Gingerbread", 356, 16.0, 49, 3.9)
];

class AccordianTwo  extends React.Component {
  state = {
    open: true
  };

  handleClick = () => {
    this.setState((state) => ({ open: !state.open }));
  };

  render() {
    return (
      <>
        <Accordion style={{marginTop:'20px'}}>
          <AccordionSummary
            expandIcon={this.state.open ? <ExpandLess /> : <ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={this.handleClick}
          >
            <Typography>Marketing&nbsp;&nbsp;<small>7seats</small></Typography>
          </AccordionSummary>
        </Accordion>

        {this.state.open && (
          <TableContainer component={Paper}>
            <Table style={{ minWidth: "650" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>SEAT TITLE</TableCell>
                  <TableCell align="right">DATE POSTED</TableCell>
                  <TableCell align="right">EXPIRATION DATE</TableCell>
                  <TableCell align="right">CANDIDATES</TableCell>
                  <TableCell align="right">STATUS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <FormControlLabel
                        value="title"
                        control={<Radio />}
                        label={row.name}
                      />
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
      </>
    );
  }
}

export default AccordianTwo;
