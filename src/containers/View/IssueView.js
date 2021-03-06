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
    }
}));
export const IssueView = ()=>{
    const classes = useStyles();
    const data = useSelector(state=>state.passDataReducer.passData);
    return (
        <div className={classes.generalbody}>
            <Typo text={ data.node.title} variant="h4" />
            <Typo text={Object.keys(data.node).includes('body') ? reduceString(data.node.body) : ""} variant="body1" />
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