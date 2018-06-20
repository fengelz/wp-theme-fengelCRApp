import React from 'react'

import ToggleMenuButton from '../../atoms/ToggleMenuButton'

import './styles.css'

class Header extends React.Component {
  render() {
    return (
      <header className="mol-b684bb38-10a7-4f15-81fe-8e7d413b4d33">
        <ToggleMenuButton
          onClick={this.props.toggleMenu}
          char={this.props.char || ''}
        />
      </header>
    )
  }
}

export default Header
