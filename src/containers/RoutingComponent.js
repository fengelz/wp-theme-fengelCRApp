import React from 'react'

class RoutingComponent extends React.Component {
  componentDidMount() {
    const { taxonomy, slug } = this.props.match.params
    this.props.context.fetchContent(this.props.match)
  }

  componentDidUpdate() {
    const { taxonomy, slug } = this.props.match.params
    this.props.context.fetchContent(this.props.match)
  }
}

export default RoutingComponent
