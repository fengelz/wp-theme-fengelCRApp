import React, { Component } from 'react'
import { Context } from './Provider'
import Aside from '../components/molecules/Aside'

class AsideContainer extends Component {
  render() {
    return (
      <Context.Consumer>
        {({ state, actions }) => {
          return (
            <Aside
              categories={state.categories}
              tags={state.tags}
              menus={state.menus}
            />
          )
        }}
      </Context.Consumer>
    )
  }
}

export default AsideContainer
