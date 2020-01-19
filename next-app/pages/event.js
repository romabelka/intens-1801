import App from '../components/App'
import { withApollo } from '../lib/apollo'

const EventPage = ({ event }) => (
    <App>
        <h1>Event id: {event.title}</h1>
    </App>
)

EventPage.getInitialProps = async ({ query: { id } }) => {
    const response = await fetch('http://localhost:5000' , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `query Event($id: ID!) {
                 event(id: $id) {
                    id
                    title
                    url
                    people {
                        id
                        firstName
                    }
                    } 
                }`,
            variables: { id }
        })
    })

    const { data } = await response.json()

    return { event: data.event }
}


export default withApollo(EventPage)
