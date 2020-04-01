import * as React from 'react'

export function Pause({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      clipRule="evenodd"
      viewBox="0 0 34 34"
    >
      <path
        fillRule="nonzero"
        d="M20.3 6h2.9A1.8 1.8 0 0125 7.8v18.4a1.8 1.8 0 01-1.8 1.8h-2.9a1.8 1.8 0 01-1.8-1.8V7.8A1.8 1.8 0 0120.3 6zm-9.5 0h2.9a1.8 1.8 0 011.8 1.8v18.4a1.8 1.8 0 01-1.8 1.8h-2.9A1.8 1.8 0 019 26.2V7.8A1.8 1.8 0 0110.8 6z"
        fill={color}
      />
    </svg>
  )
}

Pause.defaultProps = {
  width: 24,
  height: 24,
  color: '#000',
}
