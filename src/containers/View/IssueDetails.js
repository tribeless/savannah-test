import React from 'react';
import {format} from "date-fns";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {Typo} from "../../components/Typography";

export const IssueDetails =()=>{
    const data = useSelector(state=>state.passDataReducer.passData);
    return (
        <React.Fragment>
            <Grid 
                container
                direction='row'
                justify="flex-start"
                alignItems="center"
            >
                <Grid item>
                    <Typo text={`Opened:`} variant="caption text" />
                </Grid>
                <Grid item>
                    <Typo text={ format(new Date(data.node.createdAt), 'yyyy-MM-dd')} variant="caption text" />
                </Grid>
            </Grid>

            <Grid 
                container
                direction='row'
                justify="flex-start"
                alignItems="center"
            >
                <Grid item>
                    <Typo text='by:' variant="caption text" />
                </Grid>
                <Grid item>
                    <Typo text={ data.node.author.login } variant="caption text" />
                </Grid>
            </Grid>
            <Grid 
                container
                direction='row'
                justify="flex-start"
                alignItems="center"
            >
                <Grid item>
                    <Typo text='Issue No:' variant="caption text" />
                </Grid>
                <Grid item>
                    <Typo text={ data.node.number} variant="caption text" />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}