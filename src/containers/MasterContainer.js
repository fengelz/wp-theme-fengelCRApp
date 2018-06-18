import React from 'react'
import Master from '../components/organisms/Master'
import { Context } from './Provider'

class MasterContainer extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {({ state, actions }) => {
          return <Master {...state}>{this.props.children}</Master>
        }}
      </Context.Consumer>
    )
  }
}

export default MasterContainer
