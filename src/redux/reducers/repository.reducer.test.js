import * as actionTypes from "../actions/actionTypes";
import repoReducer from "./repository.reducer";

describe("repository reducer",()=>{
    it('should return initisl state',()=>{
        expect(repoReducer(undefined,{})).toEqual({
            name:''
        });
    });

    it('should return name of repository',()=>{
        expect(repoReducer({
            name:''
        },{
            type:actionTypes.REPO_NAME,
            name:'Test Repo'
        })).toEqual({
            name:'Test Repo'
        });
    });
});