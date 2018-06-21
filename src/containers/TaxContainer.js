import React from 'react'
import { Context } from './Provider'

import Taxonomy from '../components/organisms/Taxonomy'

class TaxContainer extends React.PureComponent {
  render() {
    const { match } = this.props
    return (
      <Context.Consumer>
        {({ actions }) => {
          const h1 = actions.getTaxBySlug(match.params.slug)
            ? actions.getTaxBySlug(match.params.slug).name
            : ''
          return (
            <Taxonomy
              h1={h1}
              full={
                match.params.slug === 'music' ||
                match.params.slug === 'artsy-fartsy'
              }
              posts={actions.getPosts(match)}
            />
          )
        }}
      </Context.Consumer>
    )
  }
}

export default TaxContainer
