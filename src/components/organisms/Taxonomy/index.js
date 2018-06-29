import React, { Component } from 'react'

import Posts from '../Posts'
import Intro from '../../molecules/Intro'

class Taxonomy extends Component {
  render() {
    const { posts, h1, full } = this.props
    return (
      <div className="org-ddb77b2f-e017-46fe-b6ca-ee1a210ced97">
        <Intro>
          <h1>{h1}</h1>
          <p>Go on, have a look see...</p>
        </Intro>

        <Posts full={full} posts={posts} />
      </div>
    )
  }
}

export default Taxonomy
