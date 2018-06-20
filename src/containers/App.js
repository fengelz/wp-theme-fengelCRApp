import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'babel-polyfill'

import PostsContainer from './PostsContainer'
import MasterContainer from './MasterContainer'
import AsideContainer from './AsideContainer'
import PostContainer from './PostContainer'
import { Context } from './Provider'

import Header from '../components/molecules/Header'

class App extends Component {
  render() {
    return (
      <Context.Consumer>
        {({ state }) => {
          return (
            <Router>
              <MasterContainer {...state}>
                <AsideContainer {...state} />
                <section>
                  <Header {...state} char="+" />
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
        }}
      </Context.Consumer>
    )
  }
}

export default App
