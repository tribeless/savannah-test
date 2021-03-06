import {PASS_DATA} from "./actionTypes";
import passData from "./passdata.action";

describe('passdata functionality',()=>{
    it('should render the clicked list item',()=>{
        expect(passData({})).toEqual({
            type:PASS_DATA,
            payload:{}
        });
    });
});