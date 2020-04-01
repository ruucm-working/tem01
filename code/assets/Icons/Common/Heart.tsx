import * as React from 'react'

export function Heart({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill={color}
        fillRule="evenodd"
        d="M12.003 7.998C12.643 6.82 13.769 6 15.164 6 17.394 6 19 7.686 19 9.995c0 3.517-3.742 6.713-6.372 8.399-.414.261-.843.261-1.257 0C8.741 16.708 5 13.512 5 9.995 5 7.686 6.605 6 8.836 6c1.402 0 2.521.82 3.167 1.998z"
        clipRule="evenodd"
      />
    </svg>
  )
}

Heart.defaultProps = {
  width: 24,
  height: 24,
  color: '#000',
}
