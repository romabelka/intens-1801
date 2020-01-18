import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer, {moduleName as authModuleName} from './ducks/auth'
import peopleReducer, {moduleName as peopleModuleName} from './ducks/people'
import history from '../history'

export default combineReducers({
  router: connectRouter(history),
  [authModuleName]: authReducer,
  [peopleModuleName]: peopleReducer
})
