import React from 'react';
import './search-box.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = makeStyles(theme => ({
    root: {
        width:"20%",
        display: 'flex',
        justifyContent:"center",
        alignItems: 'center',
        padding: "2px 4px",
        margin:"0 auto",
        marginBottom:"10px"
      },
    input: {
      WebkitAppearance: "none",
      border: "none",
      outline: "none",
      padding: "10px",
      width: "250px",
      lineHeight: "40px"
     },
    iconButton: {
      padding: "10",
    },
  }));

export default function SearchBox ({placeholder,handleChange}) {
    const classes = styles();
    return(
            <Paper className={classes.root}>
                <InputBase 
                    className={classes.input}
                    type='search' 
                    placeholder={placeholder}
                    onChange={handleChange}
                />
                <IconButton className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
    )  ;
}   