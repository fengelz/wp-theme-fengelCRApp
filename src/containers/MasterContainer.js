import React from 'react'
import Master from '../components/organisms/Master'

class MasterContainer extends React.Component {
  render() {
    return <Master>{this.props.children}</Master>
  }
}

export default MasterContainer
