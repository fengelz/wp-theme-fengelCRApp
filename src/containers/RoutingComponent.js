import React from 'react'

class RoutingComponent extends React.Component {
  constructor() {
    super()
    this.state = { routeChanged: false }
  }
  componentDidMount() {
    const { context, match } = this.props

    this.setState({ routeChanged: false })
    context.actions.fetchContent(match)
  }

  componentDidUpdate(prevProps) {
    const { context, location, match } = this.props
    if (location !== prevProps.location) {
      if (context.actions.hasContent(match)) {
        this.setState({
          routeChanged: true,
          content: context.actions.getContent(match),
        })
      } else {
        context.actions.fetchContent(match)
      }
    }
  }

  render() {
    const { children } = this.props

    const childrenWithProps = React.Children.map(children, (child) =>
      React.cloneElement(child, this.state)
    )

    return childrenWithProps
  }
}

export default RoutingComponent
