import * as actionTypes from "./actionTypes";
import repo_name from "./repository.action";

describe('repository action',()=>{
    it('should return expected data',()=>{
        expect(repo_name('Test Repo')).toEqual({
            type:actionTypes.REPO_NAME,
            name:'Test Repo'
        });
    });
});