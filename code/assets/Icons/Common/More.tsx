import * as React from 'react'

export function More({ color, bgColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 28 28"
    >
      <defs>
        <circle id="a" cx="14" cy="14" r="14" />
        <path
          id="b"
          d="M8 3.692A1.846 1.846 0 118 0a1.846 1.846 0 010 3.692zm-6.154 0a1.846 1.846 0 110-3.692 1.846 1.846 0 010 3.692zm12.308 0a1.846 1.846 0 110-3.692 1.846 1.846 0 010 3.692z"
          fill={color}
        />
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <mask fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill={bgColor} xlinkHref="#a" />
        <g transform="translate(6 12)">
          <mask fill="#fff">
            <use xlinkHref="#b" />
          </mask>
          <use fill="#000" fillRule="nonzero" xlinkHref="#b" />
        </g>
      </g>
    </svg>
  )
}

More.defaultProps = {
  width: 24,
  height: 24,
  color: '#000',
  bgColor: 'transparent',
}
