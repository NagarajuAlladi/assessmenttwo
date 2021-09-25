import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import styles from '../styles/Subnav.module.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 100,
    },
   
  }));

function Subnav() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
        ...state,
        [name]: event.target.value,
        });
    };

    return (
        <div className={styles.outerDiv} >
           <div >
           <p>Filterby:</p>
           </div>
           <div className={styles.innerDiv}>
           <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Date</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    
                    label="Date"
                    margin="normal"
                    // margin="dense"
                    inputProps={{
                    name: 'Date',
                    id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>12/12/2021</option>
                    
                </Select>
           </FormControl>
           </div>
           <div className={styles.innerDiv}>
               <button><StarBorderIcon/></button>
           </div>
           <div className={styles.innerDiv}>
           <FormControl>
                    <Input
                    startAdornment={
                        <InputAdornment position="start">
                        <SearchIcon style={{ cursor: "pointer" }} />
                        </InputAdornment>
                    }
                    />
                </FormControl>
          </div>
          {/* <div className={styles.innerDiv}>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                <SearchIcon style={{ cursor: "pointer" }} />
                </Grid>
                <Grid item>
                    <TextField id="input-with-icon-grid" label="search" />
                </Grid>
                </Grid>
          </div> */}
        </div>
    )
}

export default Subnav
