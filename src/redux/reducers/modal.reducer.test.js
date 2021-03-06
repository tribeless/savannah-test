import * as actionTypes from "../actions/actionTypes";
import modalReducer from "./modal.reducer";

describe('modal reducer',()=>{
    it('should return initialState',()=>{
        expect(modalReducer(undefined,{})).toEqual({
            open:false
        });
    });

    it('should return new state',()=>{
        expect(modalReducer({
            open:false
        },{
            type:actionTypes.OPEN_MODAL,
            payload:true
        })).toEqual({
            open:true
        });
    });
});