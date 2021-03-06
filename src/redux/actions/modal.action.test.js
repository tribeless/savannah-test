import * as actionTypes from "./actionTypes";
import openModal from "./modal.action";

describe('open modal test',()=>{
    it('should render the next state',()=>{
        expect(openModal(true)).toEqual({
            type:actionTypes.OPEN_MODAL,
            payload:true
        });
    });
});