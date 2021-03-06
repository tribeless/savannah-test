import * as actionTypes from "./actionTypes";
import owner from "./owner.action";

describe("owner action",()=>{
    it("should return owner name",()=>{
        expect(owner('brian')).toEqual({
            type:actionTypes.OWNER,
            payload:'brian'
        });
    });
});