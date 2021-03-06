import ownerReducer from "./owner.reducer";
import * as actionTypes from "../actions/owner.action";

describe('owner reducer',()=>{
    it("should return initial state",()=>{
        expect(ownerReducer(undefined,{})).toEqual({
            owner:"",
            id:""
        });
    });

    it("should return new state",()=>{
        expect(ownerReducer({
            owner:"Brian",
            id:"abc"
        },{
            type:actionTypes.OWNER,
            payload:"Brian",
            id:"abc"
        })).toEqual({
            owner:"Brian",
            id:"abc"
        });
    });
    
});