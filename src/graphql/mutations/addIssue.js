import {gql} from "@apollo/client";

export const ADD_ISSUE = gql `
    mutation createIssue($repositoryId: ID!, $title: String!,$body: String) {
        createIssue(input: {
            repositoryId: $repositoryId,
            title: $title,
            body: $body,
        }) {
            issue {
                body
                number
                title
                state
                createdAt
                author {
                    login
                }
            }
        }
    }
`