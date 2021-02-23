import React from "react";
import Grid from "@material-ui/core/Grid";
import {AddComment} from "./AddComment";
import {Comment} from "./Comment";

export const CommentsSection = ()=>{
    return (
        <>
            <Grid 
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item>
                    <AddComment />
                </Grid>
                <Grid item>
                    <Comment />
                </Grid>
            </Grid>
        </>
    )
}