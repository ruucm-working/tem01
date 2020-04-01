import * as React from 'react'

export function RepeatOne({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill={color}
        d="M13.575 8.818v-.826c0-.207.14-.374.314-.374.052 0 .104.016.15.046l2.174 1.426c.152.1.207.327.123.508a.347.347 0 01-.123.148L14.04 11.17c-.152.1-.343.034-.426-.147a.435.435 0 01-.039-.18v-.826H9.501c-.488 0-.844.08-1.128.232-.247.132-.434.319-.566.566-.127.238-.204.526-.226.9a6.286 6.286 0 01-.019.225.6.6 0 01-1.187-.123v-.2c0-.693.13-.912.374-1.368a2.55 2.55 0 011.059-1.059c.456-.244 1-.373 1.693-.373h4.074zm-3.2 6.4v.804a.477.477 0 01-.04.19c-.082.192-.273.262-.425.157l-2.173-1.505a.36.36 0 01-.123-.156c-.084-.191-.029-.431.123-.537l2.173-1.505a.266.266 0 01.151-.048c.173 0 .314.176.314.395v1.005h4.074c.488 0 .844-.08 1.128-.232.247-.132.434-.32.566-.567.127-.237.204-.526.226-.9.003-.048.008-.123.019-.225a.6.6 0 011.187.124v.2c0 .692-.13.91-.374 1.367a2.55 2.55 0 01-1.059 1.059c-.456.244-1 .374-1.693.374h-4.074zm8.4-9.6c.331 0 .4.268.4.6v2.8a.6.6 0 01-1.2 0V6.925l-.307.277a.608.608 0 01-.316.124.533.533 0 01-.377-.15.42.42 0 01-.113-.402c.024-.113.128-.232.313-.356.398-.456.677-.722.838-.8.181-.09.472 0 .762 0z"
      />
    </svg>
  )
}

RepeatOne.defaultProps = {
  width: 24,
  height: 24,
  color: '#000',
}
