import * as actionTypes from "../actions/actionTypes";
import repoModalReducer from "./repository.modal.reducer";

describe('repo modal reducer',()=>{
    it('should return initial state',()=>{
        expect(repoModalReducer(undefined,{})).toEqual({
            data:{}
        });
    });

    it('should return new data',()=>{
        expect(repoModalReducer({
            data:{}
        },{
            type:actionTypes.REPO_MODAL,
            payload:{}
        })).toEqual({
            data:{}
        });
    });

});