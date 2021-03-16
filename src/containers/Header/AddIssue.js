import React from "react";
import {useSelector,useDispatch} from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Input} from "../../components/InputBase";
import {ADD_ISSUE} from "../../graphql/mutations/addIssue";
import {holderAction} from "../../redux/actions/holder/holder.action";
import repo_name from "../../redux/actions/repository.action";
import owner from "../../redux/actions/owner.action";
import client from "../../apollo/client";
import openAddIssue from "../../redux/actions/addIssue.action";
import {ISSUES_QUERY} from "../../graphql/queries/issues";

const useStyles = makeStyles((theme)=>({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: "white",
        border: '1px solid #000',
        padding: theme.spacing(2, 4, 3),
        top: "260px",
        left: "460px"
    }
}));

const AddIssue = ()=>{
    const classes = useStyles();
    const open = useSelector(state=>state.addIssueReducer.open);
    const data =  useSelector(state=>state.holderReducer.data);
    const id = useSelector(state=>state.ownerReducer.id);
    const repoModalVariables = useSelector(state=>state.repoModalReducer.data);
    const dispatch = useDispatch();
    const formVal = {};

    const handleSubmit = async(e) =>{
        e.preventDefault();
        formVal.repositoryId = id;
        await client.request(ADD_ISSUE,formVal);
        repoModalVariables.first = parseInt(repoModalVariables.first, 10);
        repoModalVariables.last = parseInt(repoModalVariables.last, 10);
        const data = await client.request(ISSUES_QUERY,repoModalVariables);
        const {repository:{issues:{edges},name,owner:{login}}} = data;
        dispatch(holderAction(edges));
        dispatch(repo_name(name));
        dispatch(owner(login));
        dispatch(openAddIssue(false));
    }

    const handleClose = ()=>{
        dispatch(openAddIssue(false));
    }
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        formVal[name] = value;
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="repo modal"
            aria-describedby="repo-modal-description"
        >
            <Grid
                container
                justify="space-between"
                alignItems="flex-start"
                direction="column"
                className={classes.paper}
            >
                <form onSubmit={handleSubmit} >
                    <Grid item>
                        <Input 
                            type="text"
                            fieldName="title"
                            placeholder="enter title of issue"
                            change={handleChange}
                            className="inputs-outline"
                            required={true}
                        />
                    </Grid>
                    <Grid item>
                        <Input 
                            type="text"
                            fieldName="body"
                            placeholder="enter body of issue"
                            change={handleChange}
                            required={true}
                            className="inputs-outline"
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            type="submit"
                            className="submit_btn2"
                            data-testid="submit"
                        />
                    </Grid>
                </form>
            </Grid>
        </Modal>
    )
}

export default AddIssue;