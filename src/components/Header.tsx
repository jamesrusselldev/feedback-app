import React from 'react'


interface IHeaderProps {
    bgColor: string,
    textColor: string
}

function Header(props: IHeaderProps) {
    const styledHeader = {
        backgroundColor: props.bgColor,
        color: props.textColor
    }

    return (
        <header style={styledHeader}>
            <div className='container'>
                <h2>Feedback UI</h2>
            </div>
        </header>
    )
}

export default Header