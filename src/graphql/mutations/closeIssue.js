import {gql} from "@apollo/client";

export const CLOSE_ISSUE = gql `
    mutation closeIssue($issueId:ID!){
        closeIssue(input:{issueId:$issueId}){
            clientMutationId
        }
}
`