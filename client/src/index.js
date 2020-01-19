import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import {DndProvider} from 'react-dnd'
import HTML5Backend from "react-dnd-html5-backend";
import App from './app'
import createStore from './redux'
import history from './history'

ReactDOM.render(
    <DndProvider backend={HTML5Backend}>
      <Provider store={createStore()}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </DndProvider>,
  document.getElementById('root')
)
