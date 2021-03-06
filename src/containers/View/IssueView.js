import React from "react";
import Grid from "@material-ui/core/Grid";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {Typo} from "../../components/Typography";
import {IssueDetails} from './IssueDetails';
import {reduceString} from '../../utils/reduceString';

const bigText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam';

const useStyles = makeStyles((theme)=>({
    details:{
        marginTop:theme.spacing(2)
    },
    generalbody:{
        backgroundColor:"#ffffff",
        padding:".8rem",
        width:"86%"
    },
    body:{
        color:"#707070",
        fontSize:"14px",
        marginTop:".5rem"
    },
    title:{
        fontSize:"17px",
        fontWeight:"450"
    }
}));
export const IssueView = ()=>{
    const classes = useStyles();
    const data = useSelector(state=>state.passDataReducer.passData);
    return (
        <div className={classes.generalbody}>
            <Typo className={classes.title} text={ data.node.title.toUpperCase()} variant="h4" />
            <Typo className={classes.body} text={Object.keys(data.node).includes('body') ? reduceString(data.node.body) : ""} variant="body1" />
            <Grid 
                container
                direction='column'
                justify='flex-start'
                alignItems='flex-start'
                className={classes.details}
            >
                <IssueDetails />
            </Grid>
        </div>
    )
}