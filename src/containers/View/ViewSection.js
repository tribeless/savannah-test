import React from 'react';
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import {makeStyles} from "@material-ui/core/styles";
import {Search} from './Search';
import {Filter} from './Filter';
import {IssueView} from "./IssueView";
import {CommentsSection} from "./Comments/CommentsSection";

const useStyles = makeStyles((theme)=>({
    issueview:{
        marginTop:theme.spacing(2),
        padding:'10px',
        width:"100%",
        marginBottom:theme.spacing(2)
    },
    divider:{
        width:'100%',
        border:'0px',
        height:'1px',
        margin:'6px 6px 6px 0',
        backgroundColor:'#d5d2d2'
    }
}))

export const ViewSection = () => {
    const classes = useStyles();
    return (
        <Grid                 
            container 
            spacing={2} 
            direction="column"
            justify="center"
            alignItems="flex-start"
        >
            <section>
                <Grid 
                    container
                    spacing={2}
                    direction="column"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <Grid item>
                        <Search />
                    </Grid>
                    <Grid item>
                        <Filter />
                    </Grid>
                </Grid>
            </section>
            <section className={classes.issueview}>
                <Grid 
                    container
                    spacing={2}
                    direction="column"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <IssueView />
                </Grid>
            </section>
            <Divider className={classes.divider} />
            <section style={{width:"100%"}}>
                <CommentsSection />
            </section>
        </Grid>
    )
}