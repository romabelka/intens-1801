import {gql} from 'apollo-boost'

export default gql`
    query Event($id: ID!) {
        event(id: $id) {
            id
            title
            url
            people {
                id
                email
                firstName
            }
        }
    }
`
