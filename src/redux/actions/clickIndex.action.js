import * as actionTypes from "./actionTypes";

const clickIndex = data=>({
    type:actionTypes.CLICKINDEX,
    payload:data
});

export default clickIndex;