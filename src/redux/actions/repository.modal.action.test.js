import * as actionTypes from "./actionTypes";
import repoModal from "./repository.modal.action";

describe('repo modal action',()=>{
    it('should return new modal data',()=>{
        expect(repoModal({})).toEqual({
            type:actionTypes.REPO_MODAL,
            payload:{}
        });
    });
});