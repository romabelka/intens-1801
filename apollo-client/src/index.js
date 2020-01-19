import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from '@apollo/react-hooks'
import App from './App'
import apolloClient from './apollo/client'

ReactDOM.render(<ApolloProvider client={apolloClient}>
    <App />
</ApolloProvider>, document.getElementById('root'));
