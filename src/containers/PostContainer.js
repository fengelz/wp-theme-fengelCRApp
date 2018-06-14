import React from 'react'
import { Context } from './Provider'

import Post from '../components/molecules/Post'

class PostContainer extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {({ actions }) => {
          return (
            <Post post={actions.getPost(this.props.match.params.postSlug)} />
          )
        }}
      </Context.Consumer>
    )
  }
}

export default PostContainer
