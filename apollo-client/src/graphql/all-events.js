import {gql} from 'apollo-boost'

export default gql`
    query AllEvents {
        allEvents {
            id
            title
        }
    }
`
