import * as React from 'react'

export function Search({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill={color}
        d="M15.87 14.835c.018.015.035.03.051.047l3.864 3.863a.735.735 0 01-1.04 1.04l-3.863-3.864a.755.755 0 01-.047-.05 6.667 6.667 0 111.035-1.036zM10.667 16a5.333 5.333 0 100-10.666 5.333 5.333 0 000 10.666z"
      />
    </svg>
  )
}

Search.defaultProps = {
  width: 24,
  height: 24,
  color: '#000',
}
