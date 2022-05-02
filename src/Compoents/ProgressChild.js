import React from 'react'

function ProgressChild({color,Progress}) {

    const parentCSS={
    backgroundColor: "whitesmoke",
    margin: "4rem",
    borderRadius: "2rem"
    }
    const childCSS={
        width: `${Progress}%`,
        backgroundColor: `${color}`,
        borderRadius: "2rem",
        textAlign: "right",
        color:"white"
    }

  return (
    <div style={parentCSS}>
        <div style={childCSS}>
            <span>{`${Progress}%`}</span>
        </div>
    </div>
  )
}

export default ProgressChild