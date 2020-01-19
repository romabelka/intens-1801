import {gql} from 'apollo-boost'

export default gql`
    mutation RenameEvent($id: ID!, $title: String!) {
        renameEvent(id: $id, title: $title) {
            id
            title
        }
    }
`
