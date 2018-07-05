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
          <meta
            name="description"
            content="Hi. My name is Sune. This is my CRApp/Wordpress powered creative outlet of music and artsy fartsy shit."
          />
          <title>Sune Fengel | Bitch and Peaces</title>
          <meta property="og:title" content="Sune Fengel | Bitch and Peaces" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://fengel.com" />
          <meta
            property="og:image"
            content="https://i2.wp.com/fengel.com/wp-content/media/2012/04/01.spectacles1.jpg"
          />
          ...
        </Helmet>
        {this.props.children}
      </main>
    )
  }
}

export default Master
