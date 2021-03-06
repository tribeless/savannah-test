import * as actionTypes from "./actionTypes";
import clickIndex from "./clickIndex.action";

describe('clickIndex action',()=>{
    it("should return new data",()=>{
        expect(clickIndex(0)).toEqual({
            type:actionTypes.CLICKINDEX,
            payload:0
        });
    });
});