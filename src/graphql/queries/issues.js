import {gql} from "@apollo/client";

export const ISSUES_QUERY = gql `
    query Issues($owner:String!,$name:String!,$last:Int!,$first:Int!){
        repository(owner: $owner, name: $name) {
            name
            issues(last: $last) {
                edges {
                    node {
                        title
                        url
                        body
                        number
                        state
                        createdAt
                        comments(first:$first){
                            edges{
                                node{
                                    body
                                    author{
                                        login
                                    }
                                    createdAt
                                }
                            }
                        }
                        author{
                            login
                        }
                    }
                }
            }
        }
    }

`;