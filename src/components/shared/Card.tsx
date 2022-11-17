import React, { ReactNode } from 'react'

interface ICardProps {
    children: ReactNode,
    reverse?: boolean
}

function Card(props: ICardProps) {
    return (
        <div className={`card ${props.reverse ? 'reverse' : ''}`}>
            {props.children}
        </div>
    )
}

export default Card