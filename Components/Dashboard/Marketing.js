import React from "react";
import styles from '../../styles/Dashboard/Dashboard.module.css'
import { useState } from "react";
import ExpandLess from "@material-ui/icons/ExpandLess";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  Accordion,
  AccordionSummary,
  Grid,
  Typography,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import FlashOnIcon from "@material-ui/icons/FlashOn";

function createData(name, dateposted, expirationdate, candidates, status) {
  return { name, dateposted, expirationdate, candidates, status };
}

const rows = [
  createData(
    "Group Engineering Manager",
    "12/12/2021",
    "12/12/2021",
    "24Candidates",
    <Button
      variant="text"
      size="small"
      style={{
        backgroundColor: "rgb(232,247,239)",
        color: "rgb(134,205,165)",
        padding: "0.31rem 0.62rem",
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
    "Front-End Developer",
    "12/12/2021",
    "12/12/2021",
    "52Candidates",
    <Button
      variant="text"
      size="small"
      style={{
        backgroundColor: "rgb(232,247,239)",
        color: "rgb(134,205,165)",
        padding: "0.31rem 0.62rem",
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
    "Seniour Ruby Developer",
    "12/12/2021",
    "12/12/2021",
    "35Candidates",
    <Button
      variant="text"
      size="small"
      style={{
        backgroundColor: "rgb(233,238,246)",
        color: "rgb(104,142,203)",
        padding: "0.31rem 0.5rem",
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
  createData(
    "QA Manager",
    "12/12/2021",
    "12/12/2021",
    "22Candidates",
    <Button
      variant="text"
      size="small"
      style={{
        backgroundColor: "rgb(232,247,239)",
        color: "rgb(131,212,166)",
        padding: "0.31rem 0.625rem",
      }}
    >
      <Typography variant="caption">
        <small>
          <b>Interview Rounds</b>
        </small>
      </Typography>
    </Button>
  ),
];

function Engineering() {
  const [open, setOpen] = useState(true);
  const [activeRow, setActiveRow] = useState(null);

  return (
    <div className={styles.outerDiv}>
      <Accordion style={{ paddingRight: "0.93rem" }}>
        <AccordionSummary
          expandIcon={
            open ? (
              <ToggleButton style={{ height: "1.75rem", width: "1.75rem" }}>
                <ExpandLess style={{ opacity: "0.5" }} />
              </ToggleButton>
            ) : (
              <ToggleButton style={{ height: "1.75rem", width: "1.75rem" }}>
                <ExpandLess style={{ opacity: "0.5" }} />
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
                <b>Marketing&nbsp;&nbsp;</b>
                <small style={{ color: "rgb(58,112,209)" }}>7seats</small>
              </Typography>
            </Grid>
            <Grid item style={{ display: "flex", alignItems: "center" }}>
              <MoreHorizIcon style={{ opacity: "0.7" }} />
              <Button
                style={{
                  marginLeft: "0.93rem",
                  border: " 0.001rem solid rgb(194, 190, 190)",
                }}
                variant="text"
                color="primary"
                variant="outlined"
                size="small"
                padd
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
        <TableContainer component={Paper} style={{ padding: "0 0.93rem " }}>
          <Table
            size="small"
            style={{ minWidth: "650" }}
            aria-label="simple table"
            style={{ padding: "1.25rem" }}
          >
            <TableHead>
              <TableRow style={{ backgroundColor: "rgb(248,250,252)" }}>
                <TableCell >
                  <small>SEAT TITLE</small>
                </TableCell>
                <TableCell align="right">
                  <small>DATE POSTED</small>
                </TableCell>
                <TableCell align="right" >
                  <small>EXPIRATION DATE</small>
                </TableCell>
                <TableCell align="right" >
                  <small>CANDIDATES</small>
                </TableCell>
                <TableCell align="right" >
                  <small>STATUS</small>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} onClick={() => setActiveRow(row.name)}>
                  {/* onClick={()=>setActiveRow(row.name)} */}
                  <TableCell component="th" scope="row">
                    <FormControlLabel
                      value="title"
                      control={
                        <StarOutlineIcon
                          style={{ marginLeft: "0.93rem" }}
                          fontSize="small"
                        />
                      }
                      color={row.name === activeRow && "primary"}
                      // label={row.name}
                    />
                    {/* {""} */}
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

export default Engineering;
