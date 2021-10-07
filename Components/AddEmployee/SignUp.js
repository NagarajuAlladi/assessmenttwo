import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { FormControl } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    minWidth: "100%",
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="div" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h5'>
                Add New Employee
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="fullName"
                variant="outlined"
                // required
                fullWidth
                id="fullName"
                size="small"
                label="Full Name"
                // autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="mNumber"
                name="mobileNumber"
                variant="outlined"
                // required
                fullWidth
                id="mobileNumber"
                size="small"
                label="Mobile Number"
                // autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  id="date"
                  label="Date of Birth"
                  type="date"
                  size="small"
                  variant="outlined"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl size="small" variant='outlined' className={classes.formControl}>
                <InputLabel>
                  <small>Gender</small>
                </InputLabel>
                <Select
                  native
                  label="Gender"
                  variant="outlined"
                  inputProps={{
                    name: "gender",
                    id: "gender",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Male</option>
                  <option value={20}>Female</option>
                </Select>
              </FormControl>
            </Grid>
            <CssBaseline />
            <Grid item xs={12}>
            <FormControl size="small" variant='outlined' className={classes.formControl}>
                <InputLabel style={{ fontSize: "0.9rem" }}>
                  Office Location
                </InputLabel>
                <Select
                  native
                  label="Office Location"
                  variant="outlined"
                  inputProps={{
                    name: "officeLocation",
                    id: "officeLocation",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Gurugram</option>
                  <option value={20}>Hyderabad</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                // required
                fullWidth
                name="title"
                label="Title"
                id="title"
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
            <FormControl size="small" variant='outlined' className={classes.formControl}>
                <InputLabel style={{ fontSize: "0.9rem" }}>
                  Role
                </InputLabel>
                <Select
                  native
                  label="Role"
                  variant="outlined"
                  inputProps={{
                    name: "role",
                    id: "role",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Employee</option>
                  <option value={20}>Manager</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor:'rgb(10,193,188)',color:'white'}}
            className={classes.submit}
          >
            Send Invite
          </Button>
        </form>
      </div>
    </Container>
  );
}
