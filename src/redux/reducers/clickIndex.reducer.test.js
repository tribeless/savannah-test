import clickIndexReducer from "./clickIndex.reducer";
import * as actionTypes from "../actions/owner.action";

describe('clickIndex reducer',()=>{
    it("should return initial state",()=>{
        expect(clickIndexReducer(undefined,{})).toEqual({
            number:0
        });
    });

    it("should return new state",()=>{
        expect(clickIndexReducer({
            number:1
        },{
            type:actionTypes.CLICKINDEX,
            payload:1
        })).toEqual({
            number:1
        });
    });
    
});