import React from 'react'
import { Context } from './Provider'

import Home from '../components/organisms/Home'

class HomeContainer extends React.PureComponent {
  render() {
    const { match } = this.props
    return (
      <Context.Consumer>
        {({ actions }) => {
          return <Home posts={actions.getPosts(match)} />
        }}
      </Context.Consumer>
    )
  }
}

export default HomeContainer
