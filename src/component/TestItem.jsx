import React from 'react'

function TestItem(props) {
    
    console.log(props);
    
    return (
        <>
            {props.dobi}
            <div>두비두비라빠빠</div>
            <h3>하이라이 차차차</h3>
        </>
    )
};

export default TestItem