import gql from 'graphql-tag'

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
