import React from 'react'


const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '3px solid rgba(255,0,0,.2)', maxHeight: '460px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;