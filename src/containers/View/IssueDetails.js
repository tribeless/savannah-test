import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Typo} from "../../components/Typography";

export const IssueDetails =()=>{
    return (
        <React.Fragment>
            <Grid 
                container
                direction='row'
                justify="flex-start"
                alignItems="center"
            >
                <Grid item>
                    <Typo text='Opened:' variant="caption text" />
                </Grid>
                <Grid item>
                    <Typo text="2020-01-12" variant="caption text" />
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
                    <Typo text="bKyole" variant="caption text" />
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
                    <Typo text="AKDF74" variant="caption text" />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}