import React from "react";
import {useDispatch} from "react-redux";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from '@material-ui/core/styles';
import {SavaButton} from "../../components/Button";
import openModal from "../../redux/actions/modal.action";
import openAddIssue from "../../redux/actions/addIssue.action";

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
    },
    btn_text:{
        marginRight:"20px"
    }
}));

export const AppHeader = ()=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(openModal(true));
    }
    const handleAddIssue = ()=>{
        dispatch(openAddIssue(true));
    }
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
                        <Grid 
                            container
                            justify="flex-end"
                            alignItems="center"
                            direction="row"
                            wrap="nowrap"
                        >
                            <SavaButton 
                                click={handleClick}
                                textVariant="button"
                                text="Track Repo"
                                size="small"
                                variant="contained"
                                className={classes.btn_text}
                                textClassName="top_color"
                            />
                            <SavaButton
                                click={handleAddIssue}
                                textVariant="button"
                                text="Add Issue"
                                size="small"
                                variant="contained"
                                textClassName="top_color"
                            />
                        </Grid>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}