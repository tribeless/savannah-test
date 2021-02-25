import * as actionTypes from "../../actions/actionTypes";
import holderReducer from "./holder";

describe('holder reducer',()=>{
    it('should return initial state',()=>{
        expect(holderReducer(undefined,{})).toEqual({
            data:[]
        })
    });

    it('should return fetched data',()=>{
        expect(holderReducer({
            data:[]
        },{
            type:actionTypes.HOLDER,
            payload:[{
                node:{
                    author: {
                        login: "bryantjson"
                    },
                    body: "",
                    comments: {
                        edges: []
                    },
                    createdAt: "2020-12-21T19:14:50Z",
                    number: 835,
                    state: "OPEN",
                    title: "title",
                    url: "https://github.com/octocat/Hello-World/issues/835"
                }
            }]
        })).toEqual({
            data:[{
                node:{
                    author: {
                        login: "bryantjson"
                    },
                    body: "",
                    comments: {
                        edges: []
                    },
                    createdAt: "2020-12-21T19:14:50Z",
                    number: 835,
                    state: "OPEN",
                    title: "title",
                    url: "https://github.com/octocat/Hello-World/issues/835"
                }
            }]
        })
    })
})