import gql from 'graphql-tag'

export default gql`
    query AllEvents {
        allEvents {
            id
            title
        }
    }
`
