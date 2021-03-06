import * as actionTypes from "./actionTypes";

const passData = data =>({
    type:actionTypes.PASS_DATA,
    payload:data
});

export default passData;