import React from 'react';
import {useDispatch} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {Formik,Form as FormikForm} from "formik";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Typo} from "../../../components/Typography";
import {ISSUES_QUERY} from "../../../graphql/queries/issues";
import {SavaButton} from "../../../components/Button";
import ISSUE_ID from "../../../graphql/queries/issueId";
import client from "../../../apollo/client";
import ADDCOMMENT from "../../../graphql/mutations/addComment";
import {holderAction} from "../../../redux/actions/holder/holder.action";
import repo_name from "../../../redux/actions/repository.action";
import passData from "../../../redux/actions/passdata.action";

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
    const dispatch = useDispatch();
       const variables = {
           owner: "octocat",
           name: "Hello-World",
           number:836
       }
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
                            <Typo text="Your Comment" variant="caption text" />
                            <Formik
                                initialValues={{
                                    comment:''
                                }}
                                onSubmit={async(values)=>{
                                    const response = await client.request(ISSUE_ID,variables);
                                    if(response){
                                        const variables = {
                                            subjectId: response.repository.issue.id,
                                            clientMutationId: 'tribeless',
                                            body:values.comment
                                        }
                                        const result  =  await client.request(ADDCOMMENT,variables);
                                        if(result){
                                            const variables = {
                                                owner: "octocat",
                                                name: "Hello-World",
                                                last: 20,
                                                first: 20
                                            }
                                            const rerenderResponse = await client.request(ISSUES_QUERY,variables);
                                            if(rerenderResponse){
                                                const {repository:{issues:{edges},name}} = rerenderResponse;
                                                dispatch(holderAction(edges));
                                                dispatch(repo_name(name));
                                                dispatch(passData(edges));
                                            }
                                        }
                                        console.log(result);
                                    }
                                }}
                            >
                                {({setFieldValue,values})=>(
                                    <FormikForm>
                                        <TextareaAutosize
                                            rowsMax={5}
                                            aria-label="comment"
                                            placeholder="enter comment"
                                            className={classes.textarea}
                                            name="comment"
                                            value={values.comment}
                                            onChange={(e)=>{
                                                setFieldValue('comment',e.target.value,false)
                                            }}
                                        />
                                        <button htmlType="submit">
                                            Submit
                                        </button>
                                    </FormikForm>
                                )}
                            </Formik>
                    </Grid>
                </AccordionDetails>
      </Accordion>
        </div>
    )
}