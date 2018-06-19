import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class Aside extends PureComponent {
  render() {
    return (
      <aside className="mol-2a2c1466-55b6-4b02-9bd9-3261469c7c29">
        <div className="handle" onClick={this.props.toggleMenu} />
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <ul>
                <li>
                  <h3>Categories:</h3>
                </li>
                {this.props.categories.map((cat) => {
                  return (
                    <li key={cat.id}>
                      <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <h3>Tags:</h3>
                </li>
                {this.props.tags.map((cat) => {
                  return (
                    <li key={cat.id}>
                      <Link to={`/tag/${cat.slug}`}>{cat.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Aside
