import React from 'react'
import '../App.css'

const TextError = ({errrormsg}) => {
  return (
    <span className='err'>
      {errrormsg}
    </span>
  )
};

export default TextError
