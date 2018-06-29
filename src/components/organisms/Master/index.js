import React from 'react'
import { Helmet } from 'react-helmet'

class Master extends React.Component {
  render() {
    return (
      <main
        className={`org-05396e7b-bd4b-4913-a46a-310f301f2b77 ${
          this.props.menuOpen ? 'menu-open' : ''
        }`}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="A CRApp/Wordpress powered creative outlet of music and artsy fartsy shit. Conducted by a cancer ridden frontend developer."
          />
          <title>Sune Fengel | Bitch and Peaces</title>
        </Helmet>
        {this.props.children}
      </main>
    )
  }
}

export default Master
