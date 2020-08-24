import React from 'react';
import './Split.css'

//should have used this method for 
//setting Noteful app spacing
//for folders and notes.

function Split(props) {
    const combinedClassName = `split ${props.className}`;
    const newStyles = {flex: props.flexBasis}
    return(
        <div 
        className={combinedClassName}
        style={newStyles}>
            {props.children}
            </div>
    );
}

export default Split;

