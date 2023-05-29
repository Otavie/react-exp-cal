import React from 'react'

const Alert = (props) =>{
    const { type, message } = props;

    return (
        <div className={`alert alert-${type}`}>
            {message}
        </div>
    )
}

export default Alert;