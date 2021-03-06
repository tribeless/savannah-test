import {gql} from "@apollo/client";

const ISSUE_ID  = gql `
    query FindIssueID($owner:String!,$name:String!,$number:Int!) {
        repository(owner: $owner, name: $name) {
            issue(number: $number) {
                id
            }
        }
    }
`

export default ISSUE_ID;