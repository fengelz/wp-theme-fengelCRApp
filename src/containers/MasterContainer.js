import React from 'react'
import { withRouter } from 'react-router-dom'

import Master from '../components/organisms/Master'

class MasterContainer extends React.Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props
    if (location.pathname !== prevProps.location.pathname) {
      this.props.closeMenu()
    }
  }
  render() {
    return <Master {...this.props}>{this.props.children}</Master>
  }
}

export default withRouter(MasterContainer)
