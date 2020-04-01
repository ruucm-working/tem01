import * as React from 'react'

export function VolumeMin({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
      <path
        fill={color}
        d="M16.167 22.703c0 .875-.594 1.49-1.438 1.49-.375 0-.708-.147-1.083-.418l-4.021-2.958H6.917C5.729 20.817 5 20.171 5 18.9v-4.27c0-1.271.73-1.917 1.917-1.917h2.708l4.02-2.958c.376-.271.71-.417 1.084-.417.844 0 1.438.614 1.438 1.49v11.875z"
      />
    </svg>
  )
}

VolumeMin.defaultProps = {
  width: 24,
  height: 24,
  color: '#000',
}
