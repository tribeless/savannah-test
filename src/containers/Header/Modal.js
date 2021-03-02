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
import client from "../../apollo/client";
import {ISSUES_QUERY} from "../../graphql/queries/issues";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const RepoModal = ()=>{
    const open = useSelector(state=>state.modalReducer.open);
    const variables = useSelector(state=>state.repoModalReducer.data);
    const [modalStyle] = React.useState(getModalStyle);
    const dispatch = useDispatch();
    let formVal = {};
    console.log(variables);
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
        // const promiseTwo = new Promise(async(resolve,reject)=>{
        //     const data = await client.request(ISSUES_QUERY,variables);
        //     const {repository:{issues:{edges},name}} = data;
        //     resolve(dispatch(holderAction(edges)));
        //     resolve(dispatch(repo_name(name)));
        // });
        Promise.all([promiseOne]).then(async()=>{
            formVal.last = parseInt(formVal.last,10);
            formVal.first = parseInt(formVal.first,10);
            const data = await client.request(ISSUES_QUERY,formVal);
            const {repository:{issues:{edges},name}} = data;
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
            >
                <form onSubmit={handleSubmit} >
                    <Grid item>
                        <Input 
                            type="text"
                            fieldName="name"
                            placeholder="enter repo name"
                            change={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <Input 
                            type="text"
                            fieldName="owner"
                            placeholder="enter repo owner"
                            change={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <Input 
                            type="number"
                            fieldName="first"
                            placeholder="enter first filter value"
                            change={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <Input 
                            type="number"
                            fieldName="last"
                            placeholder="enter second filter value"
                            change={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            type="submit"
                        />
                    </Grid>
                </form>
            </Grid>
        </Modal>
    );
}

export default RepoModal;