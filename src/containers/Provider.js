import React, { Component } from 'react'

import {
  fetchRoot,
  fetchPages,
  fetchPosts,
  fetchCategories,
  fetchTags,
  fetchMenus,
} from '../wpService.js'

import Loader from '../modules/atoms/Loader'

const Context = React.createContext()

class Provider extends Component {
  constructor() {
    super()

    this.state = {
      root: {},
      pages: [],
      menus: [],
      categories: [],
      tags: [],
      cache: [],
      loading: true,
    }

    this.getPosts = (match) => {
      if (match.url === '/') return this.state.posts
      else {
        if (match.path.indexOf('/tag/') > -1) {
          const taxId = this.state.tags.find((tag) => {
            return tag.slug === match.params.slug
          }).id
          return this.state.posts.filter((post) => {
            return post.tags.indexOf(taxId) >= 0
          })
        } else if (match.path.indexOf('/category/') > -1) {
          const taxId = this.state.categories.find((category) => {
            return category.slug === match.params.slug
          }).id
          return this.state.posts.filter((post) => {
            return post.categories.indexOf(taxId) >= 0
          })
        }
      }
    }
    this.getPost = (slug) => {
      return this.state.posts.find((post) => {
        console.log(post, slug)
        return post.slug === slug
      })
    }
  }

  componentDidMount() {
    let { menus, categories, tags, pages, posts, root } = {}
    fetchRoot()
      .then((response) => (root = response))
      .then(fetchMenus)
      .then((response) => {
        menus = response
      })
      .then(fetchCategories)
      .then((response) => {
        categories = response
      })
      .then(fetchTags)
      .then((response) => {
        tags = response
      })
      .then(fetchPages)
      .then((response) => {
        pages = response
      })
      .then(fetchPosts)
      .then((response) => {
        posts = response
        console.log('Fuck you')
        this.setState({
          root,
          menus,
          categories,
          tags,
          pages,
          posts,
          loading: false,
        })
        console.log(this.state, 'state')
      })
  }

  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <Context.Provider
        value={{
          state: this.state,
          actions: {
            getPosts: (match) => this.getPosts(match),
            getPost: (slug) => this.getPost(slug),
          },
        }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export { Context, Provider }
