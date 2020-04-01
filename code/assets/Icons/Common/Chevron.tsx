import * as React from 'react'

export function Chevron({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M7.2 3.2l4.6 4.3c.1.2.2.3.2.5s-.1.3-.2.5l-4.6 4.3c-.1.1-.3.2-.5.2-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.5L10.3 8 6.2 4.1C6.1 4 6 3.8 6 3.7c0-.4.3-.7.7-.7.2 0 .4.1.5.2z"
        fill={color}
      />
    </svg>
  )
}

Chevron.defaultProps = {
  width: 24,
  height: 24,
  color: '#000',
}
