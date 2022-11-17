import React from 'react'
import spinnerGIF from '../assets/spinner.gif'

function Spinner() {
  return (
      <img src={spinnerGIF} alt="Loading..." style={{
          width: '100px',
          margin: 'auto',
          display: 'block'
          
    }}/>
  )
}

export default Spinner