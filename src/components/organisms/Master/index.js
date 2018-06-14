import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import './styles.css'

class Master extends Component {
  render() {
    return (
      <main className="org-05396e7b-bd4b-4913-a46a-310f301f2b77">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Fengel.com | Bitch and Peaces</title>
        </Helmet>
        {this.props.children}
      </main>
    )
  }
}

export default Master
