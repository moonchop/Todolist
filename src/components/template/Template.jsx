import React from 'react';
import "./template.css";
function Template(props){
    return(
        <div className='square-form'>
            {props.children}
        </div>
    )
}
export default Template;









