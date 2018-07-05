import React, { PureComponent } from 'react'
import { Helmet } from 'react-helmet'
import moment from 'moment'
import renderHTML from 'react-render-html'

import Html from '../../atoms/Html'

class Post extends PureComponent {
  render() {
    const { post, url } = this.props
    return (
      <article className="mol-28055d40-87fd-4b8c-925d-c061f7d075d2">
        <Helmet>
          <title>Sune Fengel | {renderHTML(post.title.rendered)}</title>
          <meta property="og:title" content={renderHTML(post.title.rendered)} />
          <meta property="og:url" content={`http://fengel.com${url}`} />
        </Helmet>
        <h1>
          <Html content={post.title.rendered} />
        </h1>
        <time>{moment(post.date).format('Do MMM YYYY')}</time>
        <Html content={post.content.rendered} />
      </article>
    )
  }
}

export default Post
