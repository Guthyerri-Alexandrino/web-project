import React from "react"

const Enemy = (props) => {
    return (
        <div>
            <h2>
                Meu nome é {props.name} da arena {props.arena}
            </h2>
        </div>
    )
}

export default Enemy