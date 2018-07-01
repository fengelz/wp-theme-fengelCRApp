import React from 'react'

import Icon from '../Icon'

function ToggleMenuButton(props) {
  return (
    <span
      className="atom-f6089643-9ab0-4a31-8a40-3ef172ec5a04"
      onClick={props.onClick}>
      <Icon icon={'call_received'} />
    </span>
  )
}

export default ToggleMenuButton
