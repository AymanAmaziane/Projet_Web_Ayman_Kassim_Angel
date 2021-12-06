import React from 'react'

function Footer() {
    return (
        <div style={{
            backgroundColor: 'rgb(189, 10, 40)',
            color: 'white',
            fontWeight: 'bolder',
            height: '72px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize: '1rem'
        }}>
            <p> &copy; KASSIM AYMAN FAYYAZ- {new Date().getFullYear()} </p>
        </div>
    )
}

export default Footer