import * as actionTypes from "./actionTypes";

const owner = (data,id)=>({
    type:actionTypes.OWNER,
    payload:data,
    id
});

export default owner;