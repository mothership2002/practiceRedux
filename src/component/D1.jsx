import React from 'react'
import D2 from './D2'

function D1(props) {
  return (
    <>
        <div>{props.test}</div>
        <br />
        <div>D1</div>
        <br/>
        <D2 test={props.test}></D2>
    </>
  )
}

export default D1