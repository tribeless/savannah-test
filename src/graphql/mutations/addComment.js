import {gql} from "@apollo/client";

const ADDCOMMENT = gql `
    mutation AddComment($subjectId:ID!,$clientMutationId:String!,$body:String!) {
        addComment(input: {
            subjectId: $subjectId,
            clientMutationId: $clientMutationId,
            body: $body
        }) {
            subject {
                id
            }
            commentEdge {
                cursor
                node {
                    body
                }
            }
            clientMutationId
            timelineEdge {
                cursor
            }
        }
    }
`
export default ADDCOMMENT;