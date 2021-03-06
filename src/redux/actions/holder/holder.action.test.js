import * as actionTypes from "../actionTypes";
import {holderAction} from "./holder.action";

describe('holder action',()=>{

    it('should return expected data',()=>{
        expect(holderAction([])).toEqual({
            type:actionTypes.HOLDER,
            payload:[]
        });
    });
});