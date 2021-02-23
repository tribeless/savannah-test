import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from '@material-ui/core/styles';
import {SavaButton} from "../../components/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        marginRight: theme.spacing(2),
    },
    btntext: {
        fontSize:'.8rem'
    },
    spread:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100vw'
    }
}));

export const AppHeader = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <div className={classes.spread}>
                        <IconButton
                            aria-label="just an icon"
                            color="inherit"
                            className={classes.logo}
                        >
                            <AccountCircle />
                        </IconButton>
                        <SavaButton 
                            textVariant="BUTTON TEXT"
                            text="Track Repo"
                            size="small"
                            variant="contained"
                            textClassName="btntext"
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}