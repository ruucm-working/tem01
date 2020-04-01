import * as React from 'react'

export function Songs({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill={color}
        fillRule="evenodd"
        d="M11.685 6.1c0-.464.336-.666.718-.755l3.558-.793c.71-.156 1.039.024 1.039.711v2.495c0 .405-.21.614-.815.748l-3.109.696c-.352.075-.456.165-.456.583v7.191c0 2.115-1.697 2.602-2.751 2.602-1.054 0-1.869-.816-1.869-1.825 0-1.248.935-1.763 2.056-2.033l1.136-.23c.351-.083.493-.368.493-.689v-8.7z"
        clipRule="evenodd"
      />
    </svg>
  )
}

Songs.defaultProps = {
  width: 24,
  height: 24,
  color: '#000',
}
