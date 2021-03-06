import React from "react";
import {useSelector} from "react-redux";
import {format} from "date-fns";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {Typo} from "../../../components/Typography";
import {reduceString} from '../../../utils/reduceString';

const bigText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.';

const useStyles = makeStyles((theme)=>({
    root:{
        width:'100%',
        marginTop:theme.spacing(2)
    },
    container:{
        backgroundColor:"#white"
    },
    commentsContent:{
        outline:"1px solid #3b206b",
        marginBottom:theme.spacing(1),
        backgroundColor:"#fff",
        border:"none",
        padding:".5rem"
    }
}))

export const Comment = ()=>{
    const classes = useStyles();
    const data = useSelector(state=>state.passDataReducer.passData);
    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typo text="Comments" />
                </AccordionSummary>
                <AccordionDetails>
                    <Grid 
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        className={classes.container}
                    >
                        {
                             (Array.isArray(data.node.comments.edges) && data.node.comments.edges)  && data.node.comments.edges.map(({node:{body,number,createdAt,author:{login}}})=>(
                                 <React.Fragment key={number}>
                                     {
                                    data.node.comments.edges.length > 0 ? (
                                        <Grid
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            className={classes.commentsContent}
                                        >
                                            <Grid item>
                                                <Typo text={reduceString(body)} variant="body1" />
                                            </Grid>
                                            <Grid 
                                                container
                                                direction="row"
                                                justify="space-between"
                                                alignItems="center"
                                            >
                                                <Grid item>
                                                    <Typo text={`by:${login}`} variant="caption text" />
                                                </Grid>
                                                <Grid item>
                                                    <Typo text={format(new Date(createdAt), 'yyyy-MM-dd')} variant="caption text" />
                                                </Grid>
                                            </Grid>
                                    </Grid>
                                    ):(
                                        <p>No comments for this issue</p>
                                    )
                                    }
                                </React.Fragment>
                             )
                                
                            )
                        }
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}