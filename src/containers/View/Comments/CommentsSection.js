import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {AddComment} from "./AddComment";
import {Comment} from "./Comment";

const useStyles = makeStyles((theme)=>({
    comments:{
        width:'100%'
    }
}))

export const CommentsSection = ()=>{
    const classes = useStyles();
    return (
        <>
            <Grid 
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item className={classes.comments}>
                    <AddComment />
                </Grid>
                <Grid item className={classes.comments}>
                    <Comment />
                </Grid>
            </Grid>
        </>
    )
}