import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ErrorBoundary from './ErrorBoundary'

ReactDOM.render(
  <ErrorBoundary
    render={(error, errorInfo) => (
      <>
        <p>Oops!</p>
        <p>there has been an error: {error.toString()}</p>
      </>
    )}>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
)
