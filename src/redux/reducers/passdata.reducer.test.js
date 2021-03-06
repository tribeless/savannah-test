import * as actionTypes from "../actions/actionTypes";
import passDataReducer from "./passdata.reducer";

describe('passdata reducer',()=>{

    it('shoud return initial state',()=>{
        expect(passDataReducer(undefined,{})).toEqual({
            passData:{}
        });
    });

    it('should return new data',()=>{
        expect(passDataReducer({
            passData:{}
        },{
            type:actionTypes.PASS_DATA,
            payload:{
                node :{
                    title: "title",
                    url: "https://github.com/octocat/Hello-World/issues/835",
                    body: "",
                    number: 835,
                    state: "OPEN",
                    createdAt: "2020-12-21T19:14:50Z",
                    comments: {
                        edges: []
                    },
                    author: {
                        login: "bryantjson"
                    }
                }
            }
        })).toEqual({
            passData:{
                node: {
                    title: "title",
                    url: "https://github.com/octocat/Hello-World/issues/835",
                    body: "",
                    number: 835,
                    state: "OPEN",
                    createdAt: "2020-12-21T19:14:50Z",
                    comments: {
                        edges: []
                    },
                    author: {
                        login: "bryantjson"
                    }
                }
            }
        });
    });
});