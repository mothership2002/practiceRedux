import React from 'react'
import D3 from './D3'

function D2(props) {
  return (
    <>
        {props.test}
        <br />
        <div>D2</div>
        <br/>
        <D3 test={props.test}></D3>
    </>
  )
}

export default D2