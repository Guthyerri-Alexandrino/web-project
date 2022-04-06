import React from "react"


const Arena = (props) => {
    return (
        <div>
            {React.Children.map(props.children, (el) => {return React.cloneElement(el, {...props})})}
        </div>
    )
}

export default Arena