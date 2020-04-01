import * as React from 'react'

export function ActionGlyph({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill={color}
        d="M11.174 17.208v-4.395h-4.36A.82.82 0 016 12.004c0-.445.377-.816.813-.816h4.361V6.792c0-.437.377-.792.822-.792.444 0 .822.355.822.792v4.395h4.369a.82.82 0 01.813.816.815.815 0 01-.813.809h-4.37v4.395c0 .43-.377.792-.821.792-.445 0-.822-.363-.822-.792v.001z"
      />
    </svg>
  )
}

ActionGlyph.defaultProps = {
  width: 24,
  height: 24,
  color: '#000',
}
