import ownerReducer from "./owner.reducer";
import * as actionTypes from "../actions/owner.action";

describe('owner reducer',()=>{
    it("should return initial state",()=>{
        expect(ownerReducer(undefined,{})).toEqual({
            owner:""
        });
    });

    it("should return new state",()=>{
        expect(ownerReducer({
            owner:"Brian"
        },{
            type:actionTypes.OWNER,
            payload:"Brian"
        })).toEqual({
            owner:"Brian"
        });
    });
    
});