import ApolloClient, {gql} from 'apollo-boost'

const client = new ApolloClient({
})

window.apollo = client
window.gql = gql

export default client
