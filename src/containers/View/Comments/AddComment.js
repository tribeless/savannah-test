import React from 'react';
import {useDispatch,useSelector} from "react-redux";
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
import ISSUE_ID from "../../../graphql/queries/issueId";
import client from "../../../apollo/client";
import ADDCOMMENT from "../../../graphql/mutations/addComment";
import {holderAction} from "../../../redux/actions/holder/holder.action";
import repo_name from "../../../redux/actions/repository.action";
import passData from "../../../redux/actions/passdata.action";
import {Input} from "../../../components/InputBase";

const bigText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus exsit amet blandit leo lobortis eget.';
const useStyles = makeStyles((theme)=>({
    root:{
        width:'100%'
    },
    textarea:{
        width:'100%',
    },
    submitButton:{
        padding:".5rem",
        border:"none",
        width:"80px",
        textAlign:"center",
        fontWeight:"400",
        outline: "1px solid #bebdbd"
    },
    formikForm:{
        display:'flex',
        justifyContent:"space-between",
        alignItems:"flex-start",
        flexDirection:"column"
    }
}))
export const AddComment = () =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const issueNumber = useSelector(state=>state.passDataReducer.passData);
    const name = useSelector(state => state.repoReducer.name);
    const owner = useSelector(state=>state.ownerReducer.owner);
    const clickIndex = useSelector(state=>state.clickIndexReducer.number);
    const repoModalVariables = useSelector(state=>state.repoModalReducer.data);
       const variables = {
           owner,
           name,
           number:issueNumber.node.number
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
                                    comment:'',
                                    commentee:""
                                }}
                                onSubmit={async(values)=>{
                                    const response = await client.request(ISSUE_ID,variables);
                                    if(response){
                                        const variables = {
                                            subjectId: response.repository.issue.id,
                                            clientMutationId: values.commentee,
                                            body:values.comment
                                        }
                                        const result  =  await client.request(ADDCOMMENT,variables);
                                        if(result){
                                            repoModalVariables.first = parseInt(repoModalVariables.first,10);
                                            repoModalVariables.last = parseInt(repoModalVariables.last,10);
                                            const rerenderResponse = await client.request(ISSUES_QUERY,repoModalVariables);
                                            if(rerenderResponse){
                                                const {repository:{issues:{edges},name}} = rerenderResponse;
                                                dispatch(holderAction(edges));
                                                dispatch(repo_name(name));
                                                dispatch(passData(edges[clickIndex]));
                                            }
                                        }
                                        
                                    }
                                    values.comment = "";
                                    values.commentee = "";
                                }}
                            >
                                {({setFieldValue,values})=>(
                                    <FormikForm className={classes.formikForm}>
                                        <TextareaAutosize
                                            rowsMax={5}
                                            aria-label="comment"
                                            placeholder="enter comment"
                                            className={classes.textarea}
                                            name="comment"
                                            value={values.comment}
                                            onChange={(e)=>{
                                                setFieldValue('comment',e.target.value,true)
                                            }}
                                            required={true}
                                        />
                                        <Input 
                                            type="text"
                                            fieldName="commentee"
                                            placeholder="enter commentee name"
                                            value={values.commentee}
                                            change={(e)=>{
                                                setFieldValue('commentee',e.target.value,true)
                                            }}
                                            className="inputs-outline"
                                            required={true}
                                        />
                                        <button className={classes.submitButton} htmlType="submit">
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