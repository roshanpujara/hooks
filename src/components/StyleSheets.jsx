import React from 'react';
import './myStyle.css';

function StyleSheets(props) {
    const check = props.primary?'primary':'';
  return (
    <div>
        <h1 className={check}>Hello visitor</h1>
    </div>
  )
}

export default StyleSheets