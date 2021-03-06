import * as actionTypes from "./actionTypes";

const openAddIssue = data=>({
    type:actionTypes.ADD_ISSUE,
    payload:data
});

export default openAddIssue;