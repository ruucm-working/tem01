import * as React from 'react'
import { addPropertyControls, ControlType } from 'framer'

export function Play({ color }) {
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
        d="M28.228 18.327L12.205 27.31c-.99.555-2.205-.17-2.205-1.318V8.008c0-1.146 1.215-1.873 2.205-1.317l16.023 8.982c1.029.577 1.029 2.077 0 2.654z"
        fill={color}
      />
    </svg>
  )
}

Play.defaultProps = {
  width: 24,
  height: 24,
  color: '#000',
}
addPropertyControls(Play, {
  color: ControlType.Color,
})
