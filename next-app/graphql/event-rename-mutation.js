import gql from 'graphql-tag'

export default gql`
    mutation RenameEvent($id: ID!, $title: String!) {
        renameEvent(id: $id, title: $title) {
            id
            title
        }
    }
`
