import React from 'react'

import './styles.css'

function ToggleMenuButton(props) {
  return (
    <button
      className="atom-f6089643-9ab0-4a31-8a40-3ef172ec5a04"
      onClick={props.onClick}>
      {props.char}
    </button>
  )
}

export default ToggleMenuButton
