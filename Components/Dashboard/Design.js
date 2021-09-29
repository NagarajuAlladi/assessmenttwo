import React from "react";
import { useState } from "react";
import styles from '../../styles/Dashboard/Dashboard.module.css'
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
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import { Grid, Button } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";

import StarOutlineIcon from "@material-ui/icons/StarOutline";

function createData(name, dateposted, expirationdate, candidates, status) {
  return { name, dateposted, expirationdate, candidates, status };
}

const rows = [
  createData(
    "Brand Designer,Web",
    "12/12/2021",
    "12/12/2021",
    "24Candidates",
    <Button
      variant="text"
      size="small"
      style={{
        backgroundColor: "rgb(232,247,239)",
        color: "rgb(131,212,166)",
        padding: "5px 10px",
      }}
    >
      <Typography variant="caption">
        <small>
          <b>Interview Rounds</b>
        </small>
      </Typography>
    </Button>
  ),
  createData(
    "Seniour Product Manager",
    "12/12/2021",
    "12/12/2021",
    "52Candidates",
    <Button
      variant="text"
      size="small"
      style={{
        backgroundColor: "rgb(232,247,239)",
        color: "rgb(131,212,166)",
        padding: "5px 10px",
      }}
    >
      <Typography variant="caption">
        <small>
          <b>Interview Rounds</b>
        </small>
      </Typography>
    </Button>
  ),
  createData(
    "Seniour UI Designer",
    "12/12/2021",
    "12/12/2021",
    "35Candidates",
    <Button
      variant="text"
      size="small"
      style={{
        backgroundColor: "rgb(233,238,246)",
        color: "rgb(104,142,203)",
        padding: "5px 8px",
      }}
    >
      <Typography variant="caption">
        <small>
          <b>Boost Seat</b>
        </small>
      </Typography>
      <FlashOnIcon style={{ fontSize: "0.9rem" }} />
    </Button>
  ),
];

function Design() {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.outerDiv}>
      <Accordion>
        <AccordionSummary
          expandIcon={
            open ? (
              <ToggleButton style={{ height: "28px", width: "28px" }}>
                <ExpandLess style={{ opacity: "0.3" }} />
              </ToggleButton>
            ) : (
              <ToggleButton style={{ height: "28px", width: "28px" }}>
                <ExpandLess style={{ opacity: "0.3" }} />
              </ToggleButton>
            )
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => setOpen(!open)}
        >
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography>
                <b>Design&nbsp;&nbsp;</b>
                <small style={{ color: "rgb(58,112,209)" }}>3seats</small>
              </Typography>
            </Grid>
            <Grid item style={{ display: "flex", alignItems: "center" }}>
              <MoreHorizIcon style={{ opacity: "0.7" }} />
              <Button
                style={{
                  marginLeft: "15px",
                  border: " 0.001rem solid rgb(194, 190, 190)",
                }}
                variant="text"
                color="primary"
                variant="outlined"
                size="small"
              >
                <Typography variant="caption">
                  <small>+Open Seat</small>
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </AccordionSummary>
      </Accordion>

      {open && (
        <TableContainer component={Paper} style={{ padding: "0 15px " }}>
          <Table
            size="small"
            style={{ minWidth: "650" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow style={{ backgroundColor: "rgb(248,250,252)" }}>
                <TableCell>
                  <small>SEAT TITLE</small>
                </TableCell>
                <TableCell align="right">
                  <small>DATE POSTED</small>
                </TableCell>
                <TableCell align="right">
                  <small>EXPIRATION DATE</small>
                </TableCell>
                <TableCell align="right">
                  <small>CANDIDATES</small>
                </TableCell>
                <TableCell align="right">
                  <small>STATUS</small>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <FormControlLabel
                      value="title"
                      control={
                        <StarOutlineIcon
                          fontSize="small"
                          style={{ marginLeft: "15px" }}
                        />
                      }
                      // label={row.name}
                    />
                    {""}
                    <b>{row.name}</b>
                  </TableCell>
                  <TableCell align="right">{row.dateposted}</TableCell>
                  <TableCell align="right">{row.expirationdate}</TableCell>
                  <TableCell align="right">{row.candidates}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default Design;
