import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {IssuesSection} from "../Issues/IssuesSection";
import {ViewSection} from "../View/ViewSection";

const useStyles = makeStyles((theme) => ({
    root:{
        flex:1,
        position:'relative',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'baseline',
        top:'65px',
        backgroundColor:'#eee'
    },
    sec:{
        float:'left',
        position:'relative',
        height:'100vh',
        overflow:'auto',
        overflowX:'hidden',
        width:'27%',
        borderRight:'1px solid #b6b1b1'
    },
    view:{
        marginLeft:theme.spacing(4),
        paddingTop:'20px',
        width:'70%'
    }
}));


export const Main = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <section className={classes.sec}>
                <aside>
                    <IssuesSection />
                </aside>
            </section>
            <section className={classes.view}>
                <ViewSection />
            </section>
        </div>
    )
}