import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PostsContainer from './PostsContainer'
import MasterContainer from './MasterContainer'
import AsideContainer from './AsideContainer'
import PostContainer from './PostContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <MasterContainer>
          <AsideContainer />
          <section>
            <Switch>
              <Route exact path="/" component={PostsContainer} />
              <Route exact path="/:postSlug" component={PostContainer} />
              <Route path="/tag/:slug" component={PostsContainer} />
              <Route path="/category/:slug" component={PostsContainer} />
              <Route component={PostsContainer} />
            </Switch>
          </section>
        </MasterContainer>
      </Router>
    )
  }
}

export default App
