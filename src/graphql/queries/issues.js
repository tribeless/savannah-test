import {gql} from "@apollo/client";

export const ISSUES_QUERY = gql `
    query Issues($owner:String!,$name:String!,$last:Int!){
        repository(owner: $owner, name: $name) {
            issues(last: $last) {
                edges {
                    node {
                        title
                        url
                        labels {
                            edges {
                                node {
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    }

`;