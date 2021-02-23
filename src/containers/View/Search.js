import React from 'react';
import {Input} from '../../components/InputBase';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme)=>({
      root: {
          padding: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 200,
      },
      iconButton: {
          padding: 10,
      },
}));

export const  Search = ()=>{
    const classes = useStyles();
    return (
        <Paper component="form" className={classes.root}>
            <Input placeholder="search by status" />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}