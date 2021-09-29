import { IconButton, Typography } from '@material-ui/core'
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
import Button from '@material-ui/core/Button';
import ToggleButton from '@material-ui/lab/ToggleButton';



const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 100,
    },
   
  }));

function Subnav() {
    const classes = useStyles();
    return (
        <div className={styles.outerDiv} >
           <div >
           <Typography variant='body2'>Filter By:</Typography>
           </div>
           <div className={styles.innerDiv}>
           <FormControl variant="outlined" size='small'  className={classes.formControl}>
                <InputLabel style={{fontSize:'0.9rem'}}><small>Date</small></InputLabel>
                <Select
                    native
                    // style={{width:'150px',height:'30px'}}
                    label="Date"
                    variant='outlined'
                    
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
               <ToggleButton style={{height:'40px'}}>
                <StarBorderIcon fontSize='small'/>
               </ToggleButton> 
           </div>
           <div className={styles.innerDiv} style={{display:'flex',cursor:'pointer'}}>
           {/* <FormControl>
                    <Input
                    startAdornment={
                        <InputAdornment position="start">
                        <SearchIcon style={{ cursor: "pointer" }} />
                        </InputAdornment>
                    }
                    />
            </FormControl> */}
            <SearchIcon fontSize='small'/>
            <Typography style={{fontSize:'0.8rem',padding:'2px'}}>Search</Typography>
          </div>
        </div>
    )
}

export default Subnav
