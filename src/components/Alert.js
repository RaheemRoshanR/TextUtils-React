import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
    const Lower = word.toLowerCase();
    return Lower.charAt(0).toUpperCase() + Lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
    {capitalize(props.alert.Type)}: {props.alert.msg}
    </div>
  )
}

export default Alert
