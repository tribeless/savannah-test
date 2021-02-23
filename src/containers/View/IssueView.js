import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Typo} from "../../components/Typography";
import {IssueDetails} from './IssueDetails';

const bigText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam';

const useStyles = makeStyles((theme)=>({
    details:{
        marginTop:theme.spacing(2)
    }
}));
export const IssueView = ()=>{
    const classes = useStyles();
    return (
        <>
            <Typo text="Enable user authentication" variant="h4" />
            <Typo text={bigText} variant="body1" />
            <Grid 
                container
                direction='column'
                justify='flex-start'
                alignItems='flex-start'
                className={classes.details}
            >
                <IssueDetails />
            </Grid>
        </>
    )
}