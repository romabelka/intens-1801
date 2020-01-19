import App from '../components/App'
import { withApollo } from '../lib/apollo'
import EventList from "../components/event-list";

const IndexPage = props => (
  <App>
      <EventList />
  </App>
)

export default withApollo(IndexPage)
