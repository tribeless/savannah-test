import React from "react";
import {useDispatch,useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import openModal from "../../redux/actions/modal.action";
import {Input} from "../../components/InputBase";
import repoModal from "../../redux/actions/repository.modal.action";
import {holderAction} from "../../redux/actions/holder/holder.action";
import repo_name from "../../redux/actions/repository.action";
import owner from "../../redux/actions/owner.action";
import client from "../../apollo/client";
import {ISSUES_QUERY} from "../../graphql/queries/issues";

const useStyles = makeStyles((theme)=>({
      paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: "white",
          border: '1px solid #000',
          padding: theme.spacing(2, 4, 3),
          top:"260px",
          left:"460px"
      }
}));

const RepoModal = ()=>{
    const classes = useStyles();
    const open = useSelector(state=>state.modalReducer.open);
    const dispatch = useDispatch();
    let formVal = {};
    const handleClose = ()=>{
        dispatch(openModal(false));
    }

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        formVal[name] = value;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const promiseOne = new Promise((resolve,reject)=>{
            resolve(dispatch(repoModal(formVal)));
        });
        Promise.all([promiseOne]).then(async()=>{
            formVal.last = parseInt(formVal.last,10);
            formVal.first = parseInt(formVal.first,10);
            const data = await client.request(ISSUES_QUERY,formVal);
            const {repository:{issues:{edges},name,owner:{login},id}} = data;
            dispatch(owner(login, id));
            dispatch(holderAction(edges));
            dispatch(repo_name(name));
            
        })
        dispatch(openModal(false));
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
                            fieldName="name"
                            placeholder="enter repo name"
                            change={handleChange}
                            className="inputs-outline"
                            required={true}
                        />
                    </Grid>
                    <Grid item>
                        <Input 
                            type="text"
                            fieldName="owner"
                            placeholder="enter repo owner"
                            change={handleChange}
                            className="inputs-outline"
                            required={true}
                        />
                    </Grid>
                    <Grid item>
                        <Input 
                            type="number"
                            fieldName="first"
                            placeholder="enter first filter value"
                            change={handleChange}
                            className="inputs-outline"
                            required={true}
                        />
                    </Grid>
                    <Grid item>
                        <Input 
                            type="number"
                            fieldName="last"
                            placeholder="enter second filter value"
                            change={handleChange}
                            className="inputs-outline"
                            required={true}
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            type="submit"
                            className="submit_btn"
                            data-testid="submit"
                        />
                    </Grid>
                </form>
            </Grid>
        </Modal>
    );
}

export default RepoModal;