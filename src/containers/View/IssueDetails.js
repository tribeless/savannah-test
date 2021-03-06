import React from 'react';
import {format} from "date-fns";
import {useSelector,useDispatch} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {Typo} from "../../components/Typography";
import {SavaButton} from "../../components/Button";
import {CLOSE_ISSUE} from "../../graphql/mutations/closeIssue";
import {ISSUES_QUERY} from "../../graphql/queries/issues";
import ISSUE_ID from "../../graphql/queries/issueId";
import client from "../../apollo/client";
import {holderAction} from "../../redux/actions/holder/holder.action";
import repo_name from "../../redux/actions/repository.action";
import passData from "../../redux/actions/passdata.action";

export const IssueDetails =()=>{
    const data = useSelector(state=>state.passDataReducer.passData);
    const issueNumber = useSelector(state=>state.passDataReducer.passData);
    const dispatch = useDispatch();
    const name = useSelector(state => state.repoReducer.name);
    const owner = useSelector(state=>state.ownerReducer.owner);
    const clickIndex = useSelector(state=>state.clickIndexReducer.number);
    const repoModalVariables = useSelector(state=>state.repoModalReducer.data);
    const variables = {
        owner,
        name,
        number:issueNumber.node.number
    }
    const handleClick = async()=>{
        const result = await client.request(ISSUE_ID,variables);
        if(result){
            const variables = {
                issueId:result.repository.issue.id,
            }
            const response = await client.request(CLOSE_ISSUE,variables);
            if(response){
                repoModalVariables.first = parseInt(repoModalVariables.first, 10);
                repoModalVariables.last = parseInt(repoModalVariables.last, 10);
                const rerenderResponse = await client.request(ISSUES_QUERY,repoModalVariables);
                if(rerenderResponse){
                    const {repository:{issues:{edges},name}} = rerenderResponse;
                    dispatch(holderAction(edges));
                    dispatch(repo_name(name));
                    dispatch(passData(edges[clickIndex]));
                }
            }
        }

    }
    return (
        <React.Fragment>
            <Grid 
                container
                direction='row'
                justify="flex-start"
                alignItems="center"
            >
                <Grid item>
                    <Typo text={`Opened:`} variant="caption text" />
                </Grid>
                <Grid item>
                    <Typo text={ format(new Date(data.node.createdAt), 'yyyy-MM-dd')} variant="caption text" />
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
                    <Typo text={ data.node.author.login } variant="caption text" />
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
                    <Typo text={ data.node.number} variant="caption text" />
                </Grid>
            </Grid>
            {
                data.node.state === "OPEN" && (
                <Grid 
                    container
                    direction='column'
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid 
                        item
                        >
                        <SavaButton 
                            click={handleClick}
                            textVariant="caption text"
                            text="Close Issue"
                            size="small"
                            variant="contained"
                        />
                    </Grid>
                </Grid>
                )
            }
        </React.Fragment>
    )
}