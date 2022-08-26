import React from 'react'
import { useState } from 'react';

function D3(props) {

    const {localValue, setLocalValue} = useState('test');

    return (
        <>
            {localValue}
            <br />
            {props.test}
            <br />
            <div test={props.test}>D3</div>
        </>
    )
}

export default D3