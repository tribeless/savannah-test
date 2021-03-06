import * as actionTypes from "./actionTypes";

const openModal = (state) =>({
    type:actionTypes.OPEN_MODAL,
    payload:state
});

export default openModal;