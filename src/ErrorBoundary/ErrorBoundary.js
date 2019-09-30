import React from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.object
  }

  state = {
    hasError: false,
    error: null,
    errorInfo: null
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return <div className='error'>Oops, an error has occured!</div>
    }
    return this.props.children
  }
}
