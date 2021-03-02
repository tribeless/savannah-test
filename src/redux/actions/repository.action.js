import * as actionTypes from "./actionTypes";

const repo_name = name =>({
    type:actionTypes.REPO_NAME,
    name
});

export default repo_name;