import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Typo} from "../../../components/Typography";
import {SavaButton} from "../../../components/Button";

const bigText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.';
const useStyles = makeStyles((theme)=>({
    root:{
        width:'100%'
    },
    textarea:{
        width:'100%',
    }
}))
export const AddComment = () =>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typo text="Add Comment" />
                </AccordionSummary>
                <AccordionDetails>
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                        direction="column"
                    >
                            <Typo text={bigText} variant="caption text" />
                            <form className={classes.textarea}>
                                    <TextareaAutosize
                                        rowsMax={5}
                                        aria-label="comment"
                                        placeholder="enter comment"
                                        className={classes.textarea}
                                    />
                                    <SavaButton
                                        text="Submit"
                                        variant="contained"
                                        textVariant="BUTTON TEXT"
                                    />
                            </form>
                    </Grid>
                </AccordionDetails>
      </Accordion>
        </div>
    )
}