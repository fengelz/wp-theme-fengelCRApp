import React from 'react'
import { Context } from './Provider'

import Posts from '../modules/organisms/Posts'

class PostsContainer extends React.PureComponent {
  render() {
    return (
      <Context.Consumer>
        {({ actions }) => {
          return <Posts posts={actions.getPosts(this.props.match)} />
        }}
      </Context.Consumer>
    )
  }
}

export default PostsContainer
