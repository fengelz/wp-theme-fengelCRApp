import React from 'react'
import { Context } from './Provider'

import Posts from '../components/organisms/Posts'

class PostsContainer extends React.PureComponent {
  render() {
    const { match } = this.props
    return (
      <Context.Consumer>
        {({ actions }) => {
          return (
            <Posts
              full={
                match.params.slug === 'music' ||
                match.params.slug === 'artsy-fartsy'
              }
              posts={actions.getPosts(this.props.match)}
            />
          )
        }}
      </Context.Consumer>
    )
  }
}

export default PostsContainer
